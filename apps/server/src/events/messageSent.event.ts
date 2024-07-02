import { Event } from "#core/event/event.js";
import { EventHandler } from "#core/event/eventHandler.js";

export class MessageSentEvent extends Event {
  constructor(
    readonly sessionId: number,
    readonly userId: number,
    readonly targetedGroupId: string,
    readonly messageId: number,
    readonly messageBody: string
  ) {
    super();
  }
}

export class MessageSentEventHandler extends EventHandler<MessageSentEvent> {
  async handle(event: MessageSentEvent) {
    console.log(event);
  }
}
