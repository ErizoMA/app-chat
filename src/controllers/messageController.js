import Chat from "../models/chat.js"
import Message from "../models/message.js"

export const createMessage = async (req, res) => {

  const { body, chatId } = req.body
  if (!body || !chatId) return res.status(400).json({ message: "Invalid request" })

  let message = await Message.create({
    createdBy: req.user._id,
    body,
    chat: chatId
  })

  message = await message.populate("createdBy", "name avatar")
  message = await message.populate("chat")
  message = await message.populate("chat.users", "name avatar email", "User")

  // PERFECT 
  // message = await message.populate({ path: "chat.users", select: "name avatar email", model: "User" })

  //THIS WORKS
  // message = await message.populate({
  //   path: "chat", populate: {
  //     path: "users",
  //     model: "User",
  //     select: "name avatar email"
  //   }
  // })

  // THIS ALSO WORKS, DONT GET IT AT ALL
  // message = await message.populate("createdBy", "name avatar")
  // message = await message.populate("chat")
  // message = await User.populate(message, {
  //   path: " chat.users",
  //   select: "name avatar email"
  // })

  await Chat.findByIdAndUpdate(chatId, { lastMessage: message })
  res.json({ data: message })

}

export const indexMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("createdBy", "name avatar email")
      .populate("chat")
    res.status(200).json({ data: messages })
  } catch (error) {
    console.log(error)
    res.status(500).json({ data: error.message })
  }
}