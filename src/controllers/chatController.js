import Chat from "../models/chat.js"
import User from "../models/user.js";

export const createChat = async (req, res) => {

  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: "Invalid request" })

  try {

    let chat = await Chat.find({
      isGroup: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } }
      ]
    }).populate("users", "-password").populate("lastMessage")

    // THIS SEEMS BETTER CAUSE CHAT IS AN ARRAY
    chat = await User.populate(chat, {
      path: "lastMessage.createdBy",
      select: "name avatar email "
    })
    // OTHER WAY , NOT SURE IF IM POPULATING ONLY ONE DOCUMENT
    // chat = await chat[0].populate("lastMessage.createdBy", "name avatar email", "User")

    if (chat.length > 0) return res.status(200).json({ data: chat })

    let newChat = await Chat.create({
      name: "defaultName",
      isGroup: false,
      users: [req.user._id, userId]
    })
    newChat = await newChat.populate("users", "-password", "User")
    return res.status(200).json({ data: newChat })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

export const indexChats = async (req, res) => {
  try {
    let chats = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("lastMessage")
      .populate("users", "-password")

    chats = await User.populate(chats, { path: "lastMessage.createdBy", select: "name avatar email" })
    return res.status(200).json({ data: chats })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}