import { Kysely } from "kysely";
import { Tables } from "./index.js";

export class TransactionPerformer {
  constructor(private readonly db: Kysely<Tables>) {}

  get perform() {
    return this.db.transaction().execute;
  }
}
