import { Generated, ColumnType } from "kysely";

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
    active: boolean;
    created_at: Generated<ColumnType<Date, string>>;
    last_used_at: Generated<ColumnType<Date, string>>;
  };
}
