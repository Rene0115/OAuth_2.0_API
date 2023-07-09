import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    required: true,
    type: String
  }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
