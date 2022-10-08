import { Router } from "express";
import { loginUser, registerUser, searchUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", registerUser)
router.get("/", searchUser)
router.post("/login", loginUser)


export default router;