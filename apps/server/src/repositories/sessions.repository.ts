import { Repository } from "./repository.js";
import { Kysely } from "kysely";
import { Tables } from "../database/index.js";

export class SessionsRepository extends Repository<"sessions"> {
  constructor(db: Kysely<Tables>) {
    super(db, "sessions");
  }
}
