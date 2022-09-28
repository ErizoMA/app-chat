import { Router } from "express";
import { createChat, indexChats } from "../controllers/chatController.js";

const router = Router();

router.post("/", createChat)
router.get("/", indexChats)

export default router;