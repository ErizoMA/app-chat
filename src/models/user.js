import { Schema, model } from "mongoose";

const userSchema = Schema({
  email: { type: String, required: true, match: /.+\@.+\..+/, unique: true ,message:"Must be a valid email"},
  // email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, required: true, default: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250" },
}, {
  timestamps: true,
})

export default model("User", userSchema)