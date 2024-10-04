import express from "express";
import auth from "../middlewares/authorize.js";

import { changeUserImg, chatUsers} from "../controllers/user.contoller.js";
import upload from "../middlewares/multerImgUpload.js";
const  router=express.Router();
router.get("/",auth,chatUsers);
router.post("/uploadimg",auth,upload.single('image'),changeUserImg);

export default router;