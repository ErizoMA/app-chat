import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import User from "../models/user.js";


export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) return res.status(401).json({ message: "Unauthorized" })

  try {
    const decoded = jwt.verify(token, SECRET)
    const user = await User.findById(decoded.id, "-password")
    if (!user) return res.status(404).json({ message: "User not found" })
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: "Unauthorized" })
  }
}

