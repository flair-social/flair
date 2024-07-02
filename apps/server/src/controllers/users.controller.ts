import { z } from "zod";
import {
  PASSWORD_REGEX,
  SALT_ROUNDS_AMOUNT,
  USERNAME_REGEX
} from "../const.js";
import { validate } from "../middleware/validate.js";
import { UsersRepository } from "../repositories/users.repository.js";
import { ApplicativeError } from "../core/applicative/applicativeError.js";
import { hash } from "bcrypt";
import { ApplicativeResponse } from "../core/applicative/applicativeResponse.js";
import { BaseContext } from "../index.js";

export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  async test(ctx: BaseContext) {
    ctx.set("response", ApplicativeResponse.Ok({ message: "registered" }));
  }

  async register(ctx: BaseContext) {
    const inputs = await validate(
      await ctx.req.json(),
      z.object({
        email: z.string().trim().email(),
        username: z.string().trim().regex(USERNAME_REGEX),
        password: z.string().regex(PASSWORD_REGEX)
      })
    );

    const [isEmailInUse, isUsernameTaken] = await Promise.all([
      this.usersRepository.existsByEmail(inputs.email),
      this.usersRepository.existsByUsername(inputs.username)
    ]);

    if (isEmailInUse) {
      throw ApplicativeError.Conflict("Email already in use");
    }

    if (isUsernameTaken) {
      throw ApplicativeError.Conflict("Username already taken");
    }

    const hashedPassword = await hash(inputs.password, SALT_ROUNDS_AMOUNT);

    await this.usersRepository.insert({
      email: inputs.email,
      username: inputs.username,
      password: hashedPassword
    });

    ctx.set("response", ApplicativeResponse.Ok({ message: "registered" }));
  }
}
