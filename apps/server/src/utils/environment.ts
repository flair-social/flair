import { config } from "dotenv";
import * as path from "node:path";

config({ path: path.resolve(process.cwd(), "../../.env") });

export class Environment {
  static get(key: string) {
    const value = process.env[key];

    if (!value) throw new Error(`Missing environment variable ${key}`);

    return value;
  }
}
