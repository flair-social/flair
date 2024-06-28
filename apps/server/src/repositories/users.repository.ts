import { Kysely } from "kysely";
import { Tables } from "../database/index.js";
import { Repository } from "../database/repository.js";

export class UsersRepository extends Repository<"users"> {
  constructor(db: Kysely<Tables>) {
    super(db, "users");
  }

  getByEmail(email: string) {
    return this.selectAll.where("email", "=", email).executeTakeFirst();
  }

  async existsByUsername(username: string) {
    return !!(await this.selectAll
      .where("username", "=", username)
      .executeTakeFirst());
  }

  async existsByEmail(email: string) {
    return !!(await this.selectAll
      .where("email", "=", email)
      .executeTakeFirst());
  }
}
