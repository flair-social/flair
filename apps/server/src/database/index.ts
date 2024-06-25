import Database from "better-sqlite3";
import { Kysely, SqliteDialect, Generated } from "kysely";

export interface Tables {
  users: {
    id: Generated<number>;
  };
  posts: {
    id: Generated<number>;
  };
  conversations: {
    id: Generated<number>;
  };
  messages: {
    id: Generated<number>;
  };
}

const dialect = new SqliteDialect({
  database: new Database("../../flair.db", { verbose: console.log })
});

export const db = new Kysely<Tables>({ dialect });
