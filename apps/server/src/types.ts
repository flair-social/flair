export type Primitive = string | number | boolean | null;

export type Constructor<T> = new (...args: any[]) => T;

export interface JSONSerializable {
  [key: string]: Primitive | JSONSerializable;
}
