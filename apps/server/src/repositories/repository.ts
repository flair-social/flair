import { Insertable, Kysely } from "kysely";
import { Tables } from "../database/index.js";

export abstract class Repository {
  protected constructor(
    private readonly db: Kysely<Tables>,
    private readonly table: keyof Tables
  ) {}

  protected get select() {
    return this.db.selectFrom(this.table);
  }

  protected get update() {
    return this.db.updateTable(this.table);
  }

  insert(entity: Insertable<Tables[typeof this.table]>) {
    return this.db.insertInto(this.table).values(entity).execute();
  }

  insertMany(entities: Insertable<Tables["posts"]>[]) {
    return this.db.insertInto(this.table).values(entities).execute();
  }

  getById(id: number) {
    return this.select.where("id", "=", id).executeTakeFirst();
  }

  getAll(page: number, limit: number = 10) {
    return this.select.limit(limit).offset(page * limit);
  }

  updateById(id: number, entity: Insertable<Tables[typeof this.table]>) {
    return this.db
      .updateTable(this.table)
      .where("id", "=", id)
      .set(entity)
      .execute();
  }
}
