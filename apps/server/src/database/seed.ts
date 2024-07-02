import { Kysely, sql } from "kysely";
import { Tables } from "./index.js";

export async function seed(db: Kysely<Tables>) {
  await db.schema.dropTable("users").ifExists().execute();
  await db.schema.dropTable("sessions").ifExists().execute();

  await db.schema
    .createTable("users")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("username", "varchar(255)", (col) => col.unique().notNull())
    .addColumn("email", "varchar(255)", (col) => col.unique().notNull())
    .addColumn("password", "varchar(255)", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("sessions")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("user_id", "integer", (col) =>
      col.notNull().references("users.id").onDelete("cascade")
    )
    .addColumn("active", "boolean", (col) => col.notNull())
    .addColumn("created_at", "datetime", (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addColumn("last_used_at", "datetime", (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .execute();
}
