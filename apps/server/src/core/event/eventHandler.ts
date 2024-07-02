import { Event } from "./event.js";

export abstract class EventHandler<E extends Event> {
  abstract handle(event: E): Promise<void>;
}
