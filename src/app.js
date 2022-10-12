import { createServer } from "http";
import { Server as SocketServer } from "socket.io";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import userRoute from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import messageRoute from "./routes/messageRoute.js";
import { verifyToken } from "./middlewares/auth.js";
import { PORT, CLIENT_PORT } from "./config.js";

const app = express()
const httpServer = createServer(app)
const io = new SocketServer(httpServer, {
  cors: {
    origin: CLIENT_PORT
  }
})

io.on('connection', (socket) => {
  console.log("Nuevo usuario conectado", socket.id)
  socket.on('setup', (userInfo) => {
    console.log("userId", userInfo._id)
    socket.join(userInfo._id)
    socket.emit('connected')
  })
  socket.on('new message', (msg) => {
    console.log("New message")
    const chat = msg.chat
    chat.users.forEach(user => {
      io.to(user._id).emit('message received', msg)
      io.to(user._id).emit('notification')
    })
  })
  socket.on('disconnecting', () => {
    console.log(socket.rooms)
  })
  socket.on('disconnect', () => {
    console.log("Usuario desconectado", socket.id)
  })

})
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

// ROUTES
const __dirname = path.resolve()
app.use("/", express.static(path.join(__dirname, "../client/dist")))
app.use("/api/user", userRoute)
app.use("/api/chat", verifyToken, chatRoute)
app.use("/api/message", verifyToken, messageRoute)

// DEPLOY


// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
// })

httpServer.listen(PORT)

export default app;