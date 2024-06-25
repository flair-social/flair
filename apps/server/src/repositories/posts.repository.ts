import { Repository } from "./repository.js";
import { Insertable, Kysely, Updateable } from "kysely";
import { Tables } from "../database/index.js";

export class PostsRepository extends Repository {
  constructor(db: Kysely<Tables>) {
    super(db, "posts");
  }

  updateById(id: number, post: Updateable<Tables["posts"]>) {
    return this.update.where("id", "=", id).set(post).execute();
  }

  getById(id: number) {
    return this.select.where("id", "=", id).executeTakeFirst();
  }

  getAll(page: number, limit: number = 10) {
    return this.select
      .limit(limit)
      .offset(page * limit)
      .execute();
  }
}
