import { connect } from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    console.log("Connecting to db ...")
    const db = await connect(MONGODB_URI)
    console.log(`Database : ${db.connection.name}`)

  } catch (error) {
    console.error(error)

  }
}