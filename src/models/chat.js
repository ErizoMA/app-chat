import { model, Schema } from "mongoose";

const chatSchema = Schema({
  name: { type: String, trim: true, required: true, minLength: 3 },
  isGroup: { type: Boolean, default: false },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
  admin: { type: Schema.Types.ObjectId, ref: "User" }
}, {
  timestamps: true,
})

export default model("Chat", chatSchema)