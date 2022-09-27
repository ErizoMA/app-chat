import Chat from "../models/chat.js"
import User from "../models/user.js";

export const createChat = async (req, res) => {

  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: "Invalid request" })

  try {

    let chatFounded = await Chat.find({
      isGroup: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } }
      ]
    }).populate("users", "-password").populate("lastMessage")

    // chatFounded = await User.populate(chatFounded, {
    //   path: "lastMessage.createdBy",
    //   select: "name avatar email "
    // })

    // console.log(chatFounded)
    res.status(200).json({ data: chatFounded })


  } catch (error) {
    console.log(error)


  }





  // const chat = await Chat.create({
  //   name: "defaultName",
  //   isGroup: false,
  //   users: [req.user._id, userId]
  // })

  // const chatDetailed = await Chat.findOne({ _id: chat._id }).populate("users", "-password")
  // return res.status(200).json({ data: chatDetailed })
}