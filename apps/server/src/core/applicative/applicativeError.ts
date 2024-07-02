import {
  ApplicativeResponse,
  HttpErrorStatusCode
} from "./applicativeResponse.js";

export class ApplicativeError extends Error {
  private readonly statusCode: HttpErrorStatusCode;

  constructor(message: string, statusCode: HttpErrorStatusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  toResponse() {
    return new ApplicativeResponse(false, this.statusCode, this.message);
  }

  static BadRequest(message?: string) {
    return new ApplicativeError(message ?? "Bad request", 400);
  }

  static Unauthorized(message?: string) {
    return new ApplicativeError(message ?? "Unauthorized", 401);
  }

  static NotFound(message?: string) {
    return new ApplicativeError(message ?? "Not found", 404);
  }

  static Conflict(message?: string) {
    return new ApplicativeError(message ?? "Conflict", 409);
  }

  static Internal(message?: string) {
    return new ApplicativeError(message ?? "Internal error", 500);
  }
}
