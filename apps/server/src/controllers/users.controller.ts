import { z } from "zod";
import {
  PASSWORD_REGEX,
  SALT_ROUNDS_AMOUNT,
  USERNAME_REGEX
} from "../const.js";
import { validate } from "../middleware/validate.js";
import { ControllerPayload } from "./controller.js";
import { UsersRepository } from "../repositories/users.repository.js";
import { ApplicativeError } from "../applicative/applicativeError.js";
import { hash } from "bcrypt";

export class UsersController {
  constructor(private readonly userRepository: UsersRepository) {}

  async register(ctx: ControllerPayload) {
    const inputs = await validate(
      ctx.body,
      z.object({
        email: z.string().trim().email(),
        username: z.string().trim().regex(USERNAME_REGEX),
        password: z.string().regex(PASSWORD_REGEX)
      })
    );

    const [isEmailInUse, isUsernameTaken] = await Promise.all([
      this.userRepository.existsByEmail(inputs.email),
      this.userRepository.existsByUsername(inputs.username)
    ]);

    if (isEmailInUse) {
      throw ApplicativeError.Conflict("Email already in use");
    }

    if (isUsernameTaken) {
      throw ApplicativeError.Conflict("Username already taken");
    }

    const hashedPassword = await hash(inputs.password, SALT_ROUNDS_AMOUNT);

    await this.userRepository.insert({
      email: inputs.email,
      username: inputs.username,
      password: hashedPassword
    });
  }
}
