import express from "express";
import passport from "passport";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get(
  "/auth",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

userRouter.get(
  "/authenticate",
  passport.authenticate("google"),
  async (req, res) => {
    return res.send("done");
  }
);

export default userRouter;
