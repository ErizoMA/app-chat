import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import User from "../models/user.js"

export const loginUser = async (req, res) => {
  res.json({ user: "user auth" })

}

export const registerUser = async (req, res) => {
  console.log(req.body)
  try {
    const { email, password, name, avatar } = req.body
    if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" })

    const userFound = await User.findOne({ email })
    if (userFound) return res.status(400).json({ message: "User already exists" })

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ email, password: hash, name, avatar })
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" })

    if (!user) return res.status(409).json({ message: "User not created" })

    return res.status(201).json({ data: { _id: user._id, name: user.name, avatar: user.avatar }, token })

  } catch (error) {
    return res.status(500).json({ message: error.message }) // TODO Improve this (Invalid Email !== Internal Error)
  }
}