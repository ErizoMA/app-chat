import { model, Schema } from "mongoose";

const messageSchema = Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  body: { type: String, trim: true },
  chat: { type: Schema.Types.ObjectId, ref: "Chat" },
  readBy: [{ type: Schema.Types.ObjectId, ref: "User" }]

}, {
  timestamps: true,
})

export default model("Message", messageSchema)