import express from "express";
import pino from "pino";
import dotenv from "dotenv";
import databse from "./config/db.config.js";

dotenv.config();
const app = express();

const logger = pino();

const start = (port) => {
  databse();
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

const port = process.env.PORT || 4000;
start(port);

export default logger;
