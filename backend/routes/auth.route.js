import express from "express";
import { login,signout,signup } from "../controllers/auth.controller.js";
const router=express.Router();
router.post("/signup",signup);
router.post("/signin",login);
router.post("/logout",signout);
export default router;
