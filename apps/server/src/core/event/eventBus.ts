import { Constructor } from "../../types.js";
import { Event } from "#core/event/event.js";
import { EventHandler } from "#core/event/eventHandler.js";
import { ApplicativeError } from "#core/applicative/applicativeError.js";

export class EventBus {
  private handlers: Map<Constructor<Event>["name"], EventHandler<Event>> =
    new Map();

  register<E extends Constructor<Event>>(
    event: E,
    handler: EventHandler<InstanceType<E>>
  ) {
    this.handlers.set(event.name, handler);
  }

  handle<H extends EventHandler<Event>>(
    event: H extends EventHandler<infer C> ? C : never
  ) {
    const handler = this.handlers.get(event.constructor.name);

    if (!handler) {
      throw ApplicativeError.Internal("Event handler does not exist");
    }

    void handler.handle(event);
  }
}
