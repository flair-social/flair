export type HttpErrorStatusCode = 400 | 500 | 404 | 409 | 401 | 403;
export type HttpOkStatusCode = 200 | 201;

export class ApplicativeResponse<
  T extends Record<string, unknown> | undefined = undefined
> {
  constructor(
    readonly ok: boolean,
    readonly status: HttpOkStatusCode | HttpErrorStatusCode,
    readonly message?: string,
    readonly data?: T
  ) {}

  static Ok<U extends Record<string, unknown> | undefined>(payload: {
    message?: string;
    data?: U;
  }) {
    return new ApplicativeResponse(true, 200, payload.message, payload.data);
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
