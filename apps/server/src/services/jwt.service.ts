import { sign, verify } from "hono/jwt";
import { ApplicativeError } from "../applicative/applicativeError.js";

export class JwtService {
  constructor(
    private readonly publicKey: string,
    private readonly secretKey: string
  ) {}

  sign(sessionId: bigint) {
    return sign({ sessionId }, this.secretKey, "HS256");
  }

  async decode(token: string): Promise<bigint> {
    let sessionId: bigint | undefined;

    try {
      const payload = await verify(token, this.publicKey, "HS256");
      if (payload.sessionId && typeof payload.sessionId === "bigint") {
        sessionId = payload.sessionId;
      }
    } catch (e) {
      console.error(e);
      throw ApplicativeError.BadRequest("Invalid jwt");
    }

    if (!sessionId) {
      throw ApplicativeError.BadRequest("Invalid session id");
    }

    return sessionId;
  }
}
