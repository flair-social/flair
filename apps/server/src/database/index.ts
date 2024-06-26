import Database from "better-sqlite3";
import { Kysely, SqliteDialect, Generated, ColumnType } from "kysely";

export interface Tables {
  users: {
    id: Generated<number>;
    username: string;
    email: string;
    password: string;
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
  sessions: {
    id: Generated<number>;
    user_id: number;
    created_at: Generated<ColumnType<Date, string>>;
  };
}

const dialect = new SqliteDialect({
  database: new Database("../../flair.db", { verbose: console.log })
});

export const db = new Kysely<Tables>({ dialect });
