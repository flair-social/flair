import { SessionsRepository } from "../repositories/sessions.repository.js";
import { UsersRepository } from "../repositories/users.repository.js";
import { validate } from "../middleware/validate.js";
import { z } from "zod";
import { PASSWORD_REGEX } from "../const.js";
import { ApplicativeError } from "#core/applicative/applicativeError.js";
import { compare } from "bcrypt";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { Context } from "hono";
import { ApplicativeResponse } from "#core/applicative/applicativeResponse.js";
import { JwtService } from "../services/jwt.service.js";

export class AuthController {
  constructor(
    private readonly sessionsRepository: SessionsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) {}

  async login(ctx: Context) {
    const inputs = await validate(
      await ctx.req.json(),
      z.object({
        email: z.string().trim().email(),
        password: z.string().trim().regex(PASSWORD_REGEX)
      })
    );

    const user = await this.usersRepository.getByEmail(inputs.email);

    if (!user) {
      throw ApplicativeError.BadRequest("Invalid credentials");
    }

    const isPasswordValid = await compare(inputs.password, user.password);

    if (!isPasswordValid) {
      throw ApplicativeError.BadRequest("Invalid credentials");
    }

    const { insertId } = await this.sessionsRepository.insert({
      user_id: user.id,
      active: true
    });

    if (!insertId) {
      throw ApplicativeError.Internal();
    }

    const jwt = await this.jwtService.sign(Number(insertId));

    setCookie(ctx, "jwt", jwt, {
      httpOnly: true,
      secure: true
    });

    ctx.set("response", ApplicativeResponse.Ok({ message: "Logged in" }));
  }

  async logout(ctx: Context) {
    const jwt = getCookie(ctx, "jwt");
    deleteCookie(ctx, "jwt");

    ctx.set("response", ApplicativeResponse.Ok({ message: "Logged out" }));

    if (jwt) {
      const sessionId = await this.jwtService.decode(jwt);
      await this.sessionsRepository.removeById(sessionId);
    }
  }
}
