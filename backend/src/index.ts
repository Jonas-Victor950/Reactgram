// ENV variable
require("dotenv").config();
import path from "path";

import express from "express";
import cors from "cors";
import mongoDB from "./database/app";

// Routes
import router from "./routes/Router";
import Logger from "./database/logger";

async function main() {
  const app = express();
  const port = process.env.PORT;
  app.use(express.urlencoded({ extended: false }));
  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.use(express.json());

  app.use(router);

  app.listen(port, async () => {
    Logger.info(`🚀 Projeto rodando no endereço: http://127.0.0.1:${port}`);

    mongoDB.createConection();
  });
}

main().catch((error) => {
  Logger.error("🥵 Erro!");
  Logger.error(error);
});
