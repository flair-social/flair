import { Insertable, Kysely, Transaction, Updateable } from "kysely";
import { Tables } from "./index.js";

export abstract class Repository<T extends keyof Tables> {
  protected constructor(
    private readonly db: Kysely<Tables>,
    private readonly table: T
  ) {}

  protected get selectAll() {
    return this.db.selectFrom(this.table).selectAll();
  }

  protected get update() {
    return this.db.updateTable(this.table);
  }

  insert(entity: Insertable<Tables[T]>) {
    return this.db.insertInto(this.table).values(entity).executeTakeFirst();
  }

  insertMany(entities: Insertable<Tables[T]>[]) {
    return this.db.insertInto(this.table).values(entities).execute();
  }

  getById(id: number) {
    return this.selectAll.where("id", "=", id as any).executeTakeFirst();
  }

  getAll(page: number, limit: number = 10) {
    return this.selectAll
      .limit(limit)
      .offset(page * limit)
      .execute();
  }

  updateById(id: number, entity: Updateable<Tables[T]>) {
    return this.update
      .where("id", "=", id as any)
      .set(entity as any)
      .executeTakeFirst();
  }

  removeById(id: number) {
    return this.db.deleteFrom(this.table).where("id", "=", id as any);
  }

  withTransaction(trx: Transaction<Tables>): Repository<T> {
    return { ...this, db: trx };
  }
}
