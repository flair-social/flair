import { Generated, Kysely, MysqlDialect } from "kysely";
import { Environment } from "../utils/environment.js";
import { createPool } from "mysql2";

export interface Tables {
  users: {
    id: Generated<number>;
    username: string;
    email: string;
    password: string;
  };
  groups: {
    id: Generated<number>;
    name: string;
    description: string;
    lat: number;
    long: number;
    arrival: string;
    departure: string;
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
    created_at: Generated<string>;
    last_used_at: Generated<string>;
  };
}

export const database = new Kysely<Tables>({
  dialect: new MysqlDialect({
    pool: createPool({
      host: Environment.get("MYSQL_HOST"),
      user: Environment.get("MYSQL_USER"),
      password: Environment.get("MYSQL_PASSWORD"),
      database: Environment.get("MYSQL_DATABASE"),
      typeCast: (field, next) => {
        switch (field.type) {
          case "TINY": {
            const fieldString = field.string();
            return fieldString ? fieldString === "1" : null;
          }
          // case "DATETIME": {
          //   const fieldString = field.string();
          //   return fieldString ? new Date(fieldString) : null;
          // }
          case "JSON": {
            const fieldString = field.string();
            return fieldString ? JSON.stringify(fieldString) : null;
          }
          default:
            return next();
        }
      }
    })
  })
});
