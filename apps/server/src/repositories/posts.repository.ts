import { Repository } from "../database/repository.js";
import { Kysely } from "kysely";
import { Tables } from "../database/index.js";

export class PostsRepository extends Repository<"posts"> {
  constructor(db: Kysely<Tables>) {
    super(db, "posts");
  }

  getById(id: number) {
    return this.selectAll.where("id", "=", id).executeTakeFirst();
  }

  getAll(page: number, limit: number = 10) {
    return this.selectAll
      .limit(limit)
      .offset(page * limit)
      .execute();
  }
}
