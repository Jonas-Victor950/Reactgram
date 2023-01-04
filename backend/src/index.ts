// ENV variable
require("dotenv").config();

import express from "express";
import cors from "cors";
// import mongoDB from "./database/app";

// Routes
import Logger from "./database/logger";

async function main() {
  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(port, async () => {
    Logger.info(`🚀 Projeto rodando no endereço: http://127.0.0.1:${port}`);

    // mongoDB.createConection();
  });
}

main().catch((error) => {
  Logger.error("🥵 Erro!");
  Logger.error(error);
});
