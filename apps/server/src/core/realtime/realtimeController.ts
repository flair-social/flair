import { AuthenticatedContext } from "../../index.js";
import { SSEStreamingApi, streamSSE } from "hono/streaming";
import { JSONSerializable } from "../../types.js";

export abstract class RealtimeController {
  protected abstract readonly name: string;
  protected listeners: Map<
    number /* userId */,
    Record<number /* sessionId */, SSEStreamingApi>
  > = new Map();

  addListener(userId: number, sessionId: number, stream: SSEStreamingApi) {
    const userSessions = this.listeners.get(userId);
    if (userSessions) {
      userSessions[sessionId] = stream;
    } else {
      this.listeners.set(userId, { [sessionId]: stream });
    }
    console.log(userSessions);
  }

  removeListener(userId: number, sessionId: number) {
    const userSessions = this.listeners.get(userId);
    if (userSessions) {
      delete userSessions[sessionId];
      if (Object.keys(userSessions).length === 0) {
        this.listeners.delete(userId);
      }
    }
  }

  async send<T extends JSONSerializable>(
    userIds: number[],
    initiatorSessionId: number,
    payload: T
  ) {
    for (const userId of userIds) {
      const userSessions = this.listeners.get(userId);

      if (!userSessions) {
        continue;
      }

      for (const [sessionId, stream] of Object.entries(userSessions)) {
        if (Number(sessionId) !== initiatorSessionId) {
          // await stream.write(
          //   `data: ${JSON.stringify({
          //     type: "event",
          //     source: this.name,
          //     payload
          //   })}\n\n`
          // );

          await stream.writeSSE({ data: "oui" });
        }
      }
    }
  }

  listen(ctx: AuthenticatedContext) {
    const { id, sessionId } = ctx.var.authenticatedUser;

    ctx.set("isSSE", true);

    return streamSSE(ctx, async (stream) => {
      this.addListener(id, sessionId, stream);

      // await stream.write(
      //   `data: ${JSON.stringify({
      //     type: "handshake",
      //     source: this.name
      //   })}\n\n`
      // );

      await stream.writeSSE({ data: "salut" });

      stream.onAbort(() => {
        console.log("here");
        this.removeListener(id, sessionId);
      });
    });
  }
}
