import jwt from "jsonwebtoken"
const generateTokenAndCookies=async (userId,res)=>{
    const token=await jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"30d"
    });
  
    res.cookie('jwt_',token,{
    //  maxAge:15*24*60*60*1000,
     maxAge:30*24*60*60*1000,
     httpOnly:true,
     sameSite:"strict",
     secure:process.env.NODE_ENV!=="development"
    })
    return token;
}

export default generateTokenAndCookies;