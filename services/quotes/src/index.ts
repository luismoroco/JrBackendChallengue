import server from "./models/server";
import * as dotenv from 'dotenv';
import { ERROR_SERVER_SETUP } from "./utils/err";

dotenv.config()

const PORT = process.env.PORT ?? 5000;

(async () => {
  try {
    await server.start(PORT as number);
  } catch (error) {
    console.log(ERROR_SERVER_SETUP);
  }
})();