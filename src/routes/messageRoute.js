import { Router } from "express";
import { createMessage, indexMessages } from "../controllers/messageController.js";

const router = Router();

router.post("/", createMessage)
router.get("/:chatId", indexMessages)

export default router;