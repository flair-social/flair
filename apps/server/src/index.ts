import { Hono } from "hono";
import Database from "better-sqlite3";
import { Tables } from "./database/index.js";
import { Kysely, SqliteDialect } from "kysely";
import { UsersRepository } from "./repositories/users.repository.js";
import { PostsRepository } from "./repositories/posts.repository.js";
import { SessionsRepository } from "./repositories/sessions.repository.js";
import { UsersController } from "./controllers/users.controller.js";

const dialect = new SqliteDialect({
  database: new Database("../../flair.db", { verbose: console.log })
});

const db = new Kysely<Tables>({ dialect });

const usersRepository = new UsersRepository(db);
const sessionsRepository = new SessionsRepository(db);
const postsRepository = new PostsRepository(db);

const usersController = new UsersController(usersRepository);

const app = new Hono();
