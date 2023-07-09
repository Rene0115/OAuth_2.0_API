import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import userModel from "../models/user.model.js";

const passportConfig = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/user/authenticate",
        passReqToCallback: true
      },
      async (req, accessToken, refreshToken, profile, cb) => {
        const exists = await userModel.findOne({ email: profile.email });
        if(exists) return "User already exists"
        const data = { email: profile.email}
        const user = await userModel.create(data);
        console.log(user);
        return cb(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

export default passportConfig;
