import { Kysely } from "kysely";
import { Tables } from "../database/index.js";
import { Repository } from "./repository.js";

export class UsersRepository extends Repository<"users"> {
  constructor(db: Kysely<Tables>) {
    super(db, "users");
  }

  async existsByUsername(username: string) {
    return !!(await this.select
      .where("username", "=", username)
      .executeTakeFirst());
  }

  async existsByEmail(email: string) {
    return !!(await this.select.where("email", "=", email).executeTakeFirst());
  }
}
