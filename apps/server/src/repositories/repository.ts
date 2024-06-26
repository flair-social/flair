import { Insertable, Kysely, Updateable } from "kysely";
import { Tables } from "../database/index.js";

export abstract class Repository<T extends keyof Tables> {
  protected constructor(
    private readonly db: Kysely<Tables>,
    private readonly table: T
  ) {}

  protected get select() {
    return this.db.selectFrom(this.table);
  }

  protected get update() {
    return this.db.updateTable(this.table);
  }

  insert(entity: Insertable<Tables[T]>) {
    return this.db.insertInto(this.table).values(entity).execute();
  }

  insertMany(entities: Insertable<Tables[T]>[]) {
    return this.db.insertInto(this.table).values(entities).execute();
  }

  getById(id: number) {
    return this.select.where("id", "=", id as any).executeTakeFirst();
  }

  getAll(page: number, limit: number = 10) {
    return this.select.limit(limit).offset(page * limit);
  }

  updateById(id: number, entity: Updateable<Tables[T]>) {
    return this.update
      .where("id", "=", id as any)
      .set(entity as any)
      .execute();
  }
}
