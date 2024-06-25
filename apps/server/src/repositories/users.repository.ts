import { Kysely } from "kysely";
import { Tables } from "../database/index.js";
import { Repository } from "./repository.js";

export class UsersRepository extends Repository {
  constructor(db: Kysely<Tables>) {
    super(db, "users");
  }
}
