import express from "express";
import router from "../routes/index.routes.js";
import errorHandler from "./error.middleware.js";
import passport from "passport";
import morgan from "morgan";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(cors())
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(router);
  app.use(errorHandler);
  app.use(morgan("dev"));
};

export default middleware;
