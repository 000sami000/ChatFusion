import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
dotenv.config()
const __dirname = path.resolve();

app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser())
import {app,server} from "./socket/socket.js"
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
const PORT=process.env.PORT||5000;

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


async function serverconnect(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        server. listen(PORT,()=>{console.log("server is running on port 5000")})
    }catch(err){
  console.log("--[]--",err)
    }

}
serverconnect()
export default app;