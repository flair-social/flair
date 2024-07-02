import { Context, Hono } from "hono";
import { BaseContextEnv } from "./index.js";
import { UsersController } from "./controllers/users.controller.js";
import { applicativeBoundary } from "./middleware/applicativeBoundary.js";
import { AuthController } from "./controllers/auth.controller.js";
import { Authentication } from "./middleware/authentication.js";
import { MessagesRealtimeController } from "./controllers/messages.realtimeController.js";

export function apiRoutes(
  usersController: UsersController,
  authController: AuthController,
  messagesRealtimeController: MessagesRealtimeController,
  authentication: Authentication
) {
  const router = new Hono<BaseContextEnv>();
  router.use(applicativeBoundary);
  router.post("/register", usersController.register.bind(usersController));
  router.get(
    "/test",
    authentication.authenticate,
    usersController.test.bind(usersController)
  );

  router.post("/auth/login", authController.login.bind(authController));
  router.post("/auth/logout", authController.logout.bind(authController));

  router.get(
    "/messages/stream",
    authentication.authenticate.bind(authentication),
    messagesRealtimeController.listen.bind(messagesRealtimeController)
  );

  return router;
}
