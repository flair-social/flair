import { Context, Next } from "hono";
import { SessionsRepository } from "../repositories/sessions.repository.js";
import { JwtService } from "../services/jwt.service.js";
import { deleteCookie, getCookie } from "hono/cookie";
import { ApplicativeError } from "#core/applicative/applicativeError.js";
import { BaseContext } from "../index.js";

export class Authentication {
  constructor(
    private readonly sessionsRepository: SessionsRepository,
    private readonly jwtService: JwtService
  ) {}

  async authenticate(ctx: BaseContext, next: Next) {
    const jwt = getCookie(ctx, "jwt");

    if (!jwt) {
      throw ApplicativeError.Unauthorized("Not authenticated");
    }

    const sessionId = await this.jwtService.decode(jwt);

    if (!sessionId) {
      throw ApplicativeError.Internal();
    }

    const session = await this.sessionsRepository.getById(sessionId);

    if (!session || !session.active) {
      deleteCookie(ctx, "jwt");
      throw ApplicativeError.Unauthorized("Unauthenticated");
    }

    ctx.set("authenticatedUser", {
      id: session.user_id,
      sessionId: session.id
    });

    // void this.sessionsRepository.updateById(sessionId, {
    //   last_used_at: new Date().toISOString()
    // });

    await next();
  }
}
