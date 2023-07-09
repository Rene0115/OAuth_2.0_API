import express from "express";
import router from "../routes/index.routes.js";
import errorHandler from "./error.middleware.js";
import morgan from "morgan";

const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router)
  app.use(errorHandler)
  app.use(morgan('dev'))
};


export default middleware;