import express from "express";
import pino from "pino";
import dotenv from "dotenv";
import databse from "./config/db.config.js";
import middleware from "./middleware/middleware.js";
import passportConfig from "./config/passport.config.js";


dotenv.config();
const app = express();

middleware(app);

passportConfig();

const logger = pino();

app.get('/', (req,res)=>{
    return res.send('ping')
})

const start = (port) => {
  databse();
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

const port = process.env.PORT || 4000;
start(port);

export default logger;
