import { Kysely } from "kysely";

export async function up(db: Kysely<any>) {
  await db.schema
    .createTable("users")
    .addColumn("id", "integer", (col) => {
      col.primaryKey();
      col.autoIncrement();
      return col;
    })
    .addColumn("username", "varchar", (col) => {
      col.unique();
      col.notNull();
      return col;
    })
    .addColumn("email", "varchar", (col) => {
      col.unique();
      col.notNull();
      return col;
    })
    .execute();
}
