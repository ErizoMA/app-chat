import express from "express";
import morgan from "morgan";
import userRoute from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import messageRoute from "./routes/messageRoute.js";
import { verifyToken } from "./middlewares/auth.js";

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

// ROUTES
app.use("/api/user", userRoute)
app.use("/api/chat", verifyToken, chatRoute)
app.use("/api/message", verifyToken, messageRoute)

export default app;