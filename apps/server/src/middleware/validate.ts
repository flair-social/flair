import { z } from "zod";
import { ApplicativeError } from "../core/applicative/applicativeError.js";

export async function validate<T extends z.ZodSchema>(
  payload: any,
  mustSatisfy: T
) {
  try {
    return (await mustSatisfy.parseAsync(payload)) as ReturnType<
      Awaited<T["parseAsync"]>
    >;
  } catch (e) {
    console.error(e);
    throw ApplicativeError.BadRequest();
  }
}
