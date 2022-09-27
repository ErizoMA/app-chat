import { Router } from "express";
import { createChat } from "../controllers/chatController.js";

const router = Router();

router.post("/", createChat)

export default router;