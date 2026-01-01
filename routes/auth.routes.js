import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

// POST /api/register - Register new user
router.post('/register', registerUser);

// POST /api/login - Login existing user
router.post('/login', loginUser);

export default router;