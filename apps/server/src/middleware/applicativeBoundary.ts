import { ApplicativeError } from "../core/applicative/applicativeError.js";
import { createMiddleware } from "hono/factory";
import { BaseContextEnv } from "../index.js";

export const applicativeBoundary = createMiddleware<BaseContextEnv>(
  async (ctx, next) => {
    await next();
    const response = ctx.var.response;

    if (response) {
      ctx.status(response.status);
      return ctx.json(response.serialize());
    }

    if (!ctx.get("isSSE")) {
      const fallbackResponse = ApplicativeError.NotFound().toResponse();

      ctx.status(fallbackResponse.status);
      return ctx.json(fallbackResponse.serialize());
    }
  }
);
