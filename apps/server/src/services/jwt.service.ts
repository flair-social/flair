import { sign, verify } from "hono/jwt";
import { ApplicativeError } from "../core/applicative/applicativeError.js";

export class JwtService {
  constructor(
    private readonly publicKey: string
    // private readonly secretKey: string
  ) {}

  sign(sessionId: number) {
    return sign({ sessionId }, this.publicKey);
  }

  async decode(token: string): Promise<number> {
    let sessionId: number | undefined;

    try {
      const payload = await verify(token, this.publicKey);
      if (payload.sessionId && typeof payload.sessionId === "number") {
        sessionId = payload.sessionId;
      }
    } catch (e) {
      console.error(e);
      throw ApplicativeError.BadRequest("Invalid jwt");
    }

    if (!sessionId) {
      throw ApplicativeError.BadRequest("Invalid session id");
    }

    return sessionId;
  }
}
