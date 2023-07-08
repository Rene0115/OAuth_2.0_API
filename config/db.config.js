import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../app.js";

dotenv.config();
const uri = process.env.MONGODB_URI;
const databse = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri)
    .then(() => {
      logger.info("Database Connection established");
    })
    .catch((err) => {
      logger.error(err);
    });
};


export default databse;