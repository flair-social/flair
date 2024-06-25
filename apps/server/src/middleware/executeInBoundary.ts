import { ControllerPayload } from "../controllers/controller.js";
import { ApplicativeResponse } from "../applicative/applicativeResponse.js";
import { Context } from "hono";
import { ApplicativeError } from "../applicative/applicativeError.js";

export async function executeInBoundary(
  controllerMethod: (payload: ControllerPayload) => Promise<ApplicativeResponse>
) {
  return async (c: Context) => {
    try {
      const body = await c.req.json();
      const headers = c.req.header();
      const response = await controllerMethod({
        body,
        headers
      });

      c.status(response.status);
      return c.json(response.json());
    } catch (e) {
      let response: ApplicativeResponse;

      if (e instanceof ApplicativeError) {
        console.error(e.message);
        response = e.toResponse();
      } else {
        console.error(e);
        response = ApplicativeError.Internal().toResponse();
      }

      c.status(response.status);
      return c.json(response.json());
    }
  };
}
