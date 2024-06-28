export interface ControllerPayload {
  body: any;
  headers: Record<string, string>;
  cookies?: Record<string, string>;
}
