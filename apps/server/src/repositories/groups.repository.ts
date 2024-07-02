import { Repository } from "../database/repository.js";
import { Kysely } from "kysely";
import { Tables } from "../database/index.js";

export class GroupsRepository extends Repository<"groups"> {
  constructor(db: Kysely<Tables>) {
    super(db, "groups");
  }
}
