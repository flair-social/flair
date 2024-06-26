import { z } from "zod";
import { ApplicativeError } from "../applicative/applicativeError.js";

export async function validate<T extends z.ZodSchema>(payload: any, schema: T) {
  try {
    return (await schema.parseAsync(payload)) as ReturnType<
      Awaited<T["parseAsync"]>
    >;
  } catch (e) {
    console.error(e);
    throw ApplicativeError.BadRequest();
  }
}
