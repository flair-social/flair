import { seed } from "../database/seed.js";
import { database } from "../database/index.js";

import dotenv from "dotenv";

dotenv.config();

seed(database).then(() => process.exit(0));
