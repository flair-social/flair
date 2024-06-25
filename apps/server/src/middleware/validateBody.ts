import { z } from "zod";
import { ControllerPayload } from "../controllers/controller.js";

export function validateBody(schema: z.ZodSchema) {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = async (context: ControllerPayload) => {
      console.log(context);
    };

    console.log("here également");
    // const payload = await schema.safeParse();
  };
}
