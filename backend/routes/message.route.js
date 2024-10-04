import express from "express";
import { sendMessage,getmessages } from "../controllers/message.controller.js";
import auth from "../middlewares/authorize.js";
const  router=express.Router();

router.get("/:id",auth,getmessages)
router.post("/send/:id",auth,sendMessage);

export default router;