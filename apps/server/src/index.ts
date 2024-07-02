import { UsersRepository } from "./repositories/users.repository.js";
import { SessionsRepository } from "./repositories/sessions.repository.js";
import { GroupsRepository } from "./repositories/groups.repository.js";
import { UsersController } from "./controllers/users.controller.js";
import { Context, Hono } from "hono";
import { database } from "./database/index.js";
import { ApplicativeResponse } from "./core/applicative/applicativeResponse.js";
import { apiRoutes } from "./apiRoutes.js";
import { AuthController } from "./controllers/auth.controller.js";
import { TransactionPerformer } from "./database/transactionPerformer.js";
import { JwtService } from "./services/jwt.service.js";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { Authentication } from "./middleware/authentication.js";
import { MessagesRealtimeController } from "./controllers/messages.realtimeController.js";
import { ApplicativeError } from "#core/applicative/applicativeError.js";
import { Environment } from "./utils/environment.js";

export interface BaseContextEnv {
  Variables: {
    response?: ApplicativeResponse;
    isSSE?: boolean;
    authenticatedUser?: {
      id: number;
      sessionId: number;
    };
  };
}

export interface AuthenticatedContextEnv extends BaseContextEnv {
  Variables: BaseContextEnv["Variables"] & {
    authenticatedUser: {
      id: number;
      sessionId: number;
    };
  };
}

export declare class BaseContext extends Context<BaseContextEnv> {}
export declare class AuthenticatedContext extends Context<AuthenticatedContextEnv> {}

const transactionPerformer = new TransactionPerformer(database);

const jwtService = new JwtService(Environment.get("SSH_PUBLIC"));

const usersRepository = new UsersRepository(database);
const sessionsRepository = new SessionsRepository(database);
const postsRepository = new GroupsRepository(database);

const app = new Hono();
app.use(logger());

app.onError(async (err: Error, ctx) => {
  let response: ApplicativeResponse;

  if (err instanceof ApplicativeError) {
    console.error(err.message);
    response = err.toResponse();
  } else {
    console.error(err);
    response = ApplicativeError.Internal().toResponse();
  }

  ctx.status(response.status);
  return ctx.json(response.serialize());
});

app.route(
  "/api",
  apiRoutes(
    new UsersController(usersRepository),
    new AuthController(sessionsRepository, usersRepository, jwtService),
    new MessagesRealtimeController(),
    new Authentication(sessionsRepository, jwtService)
  )
);

app.use("*", () => {
  throw ApplicativeError.NotFound();
});

serve(
  {
    fetch: app.fetch,
    port: 1337
  },
  console.log
);
