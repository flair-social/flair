import { JSONSerializable, Primitive } from "../../types.js";

export type HttpErrorStatusCode = 400 | 500 | 404 | 409 | 401 | 403;
export type HttpOkStatusCode = 200 | 201;

export class ApplicativeResponse<
  T extends Record<string, Primitive> | undefined | unknown = unknown
> {
  constructor(
    readonly ok: boolean,
    readonly status: HttpOkStatusCode | HttpErrorStatusCode,
    readonly message?: string,
    readonly data?: T
  ) {}

  static Ok<U extends JSONSerializable | undefined>(payload: {
    message?: string;
    data?: U;
  }) {
    return new ApplicativeResponse(true, 200, payload.message, payload.data);
  }

  serialize() {
    return {
      ok: this.ok,
      status: this.status,
      message: this.message,
      data: this.data
    };
  }

  json() {
    return JSON.stringify({
      ok: this.ok,
      status: this.status,
      message: this.message,
      data: this.data
    });
  }
}
