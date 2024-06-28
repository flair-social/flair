import { SessionsRepository } from "../repositories/sessions.repository.js";
import { UsersRepository } from "../repositories/users.repository.js";
import { validate } from "../middleware/validate.js";
import { z } from "zod";
import { PASSWORD_REGEX } from "../const.js";
import { ApplicativeError } from "../applicative/applicativeError.js";
import { compare } from "bcrypt";
import { getCookie, setCookie } from "hono/cookie";
import { Context } from "hono";
import { ApplicativeResponse } from "../applicative/applicativeResponse.js";
import { JwtService } from "../services/jwt.service.js";
import { TransactionPerformer } from "../database/transactionPerformer.js";

export class AuthController {
  constructor(
    private readonly sessionsRepository: SessionsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly transactionPerformer: TransactionPerformer,
    private readonly jwtService: JwtService
  ) {}

  async login(ctx: Context) {
    const inputs = await validate(
      ctx.req.json(),
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

    const sessionId = await this.transactionPerformer.perform(async (trx) => {
      const insertion = await this.sessionsRepository
        .withTransaction(trx)
        .insert({
          user_id: user.id,
          active: true
        });

      if (!insertion.insertId) {
        throw ApplicativeError.Internal();
      }

      return insertion.insertId;
    });

    const jwt = await this.jwtService.sign(sessionId);

    setCookie(ctx, "session_token", jwt, {
      httpOnly: true,
      secure: true
    });

    return ApplicativeResponse.Ok({ message: "Logged in" });
  }

  async authenticate(ctx: Context) {
    const jwt = getCookie(ctx, "session_token");

    if (!jwt) {
      throw ApplicativeError.Unauthorized("Unauthenticated");
    }

    // const sessionId = await this.jwtService.decode(jwt);
    //
    // const
  }
}
