import usermodal from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndCookies from "../utils/generatejwt.js";
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await usermodal.findOne({ username });
    const ispasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !ispasswordCorrect) {
      return res.status(403).json({ error: "false credentials" });
    }
    let token = await generateTokenAndCookies(user._id, res);

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      profileimg: user.profileimg,
      token_: token,
    });
  } catch (err) {
   return res.status(400).json({ error: err.message });
  }
};
export const signup = async (req, res) => {
  const { name, username, password, gender, confirmpassword } = req.body;
  if (password != confirmpassword) {
    return res.status(400).json({ error: "Passwords are not equal" });
  }
  try {
    const user = await usermodal.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const avatar = `https://avatar.iran.liara.run/public/${
      gender === "male" ? "boy" : "girl"
    }?username=${username}`;
    const newuser = new usermodal({
      name,
      username,
      password: hashedpassword,
      gender,
      profileimg: avatar,
    });
    if (newuser) {
      let token =await  generateTokenAndCookies(newuser._id, res);
      await newuser.save();
      return res.status(201).json({
        _id: newuser._id,
        name: newuser.name,
        username: newuser.username,
        profileimg: newuser.profileimg,
        token_: token,
      });
    } else {
      return res.status(400).json({ error: "invalid user data" });
    }
  } catch (err) {
    console.log("signup err---", err);
   return  res.status(400).json({ error: err.message });
  }
};
export const signout = (req, res) => {
  try {
    res.cookie("jwt_", "", { maxAge: 0 });
  return  res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
