import { Router } from "express";
import { loginUser, registerUser, searchUser } from "../controllers/userController.js";

const router = Router();

router.post("/", registerUser)
router.get("/",searchUser)
router.post("/login", loginUser)


export default router;