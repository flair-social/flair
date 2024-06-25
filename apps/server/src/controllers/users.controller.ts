import { validateBody } from "../middleware/validateBody.js";
import { z } from "zod";

export class UsersController {
  @validateBody(
    z.object({
      test: z.string()
    })
  )
  login({ body: { username: string, pass } }) {
    console.log("here");
  }
}

const test = new UsersController();
test.login();
