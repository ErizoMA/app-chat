import express from "express";
import morgan from "morgan";
import userRoute from "./routes/userRoute.js";

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

// ROUTES
app.use("/api/user", userRoute)

export default app;