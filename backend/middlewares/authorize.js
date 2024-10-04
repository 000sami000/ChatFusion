import jwt from "jsonwebtoken";
import usermodal from "../models/user.model.js";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorize access, no token founded" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorize access, invalid token" });
    }
    const user = await usermodal.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    req.token_ = token;
    next();
  } catch (err) {
    console.log("auth --- err", err);
    res.status(500).json({ error: err.message });
  }
};
export default auth;
