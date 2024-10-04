import usermodal from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";
import conversationmodal from "../models/conversation.model.js";

export const chatUsers = async (req, res) => {
  const { q } = req.query;
  res.setHeader("Cache-Control", "no-store");
  try {
    //checking if there is any query or not from client side
    if (q) {
      const filteredUsers = await usermodal
        .find({
          username: { $regex: q, $options: "i" },
          _id: { $ne: req.user._id },
        })
        .select("-password");
      return res.status(200).json(filteredUsers);
    }

    let conversations = await conversationmodal
      .find({
        participants: req.user._id,
      })
      .populate("participants", "name username profileimg lastMessage");

    let users = [];
    conversations.forEach((conversation) => {
      conversation.participants.forEach((participant) => {
        if (participant._id.toString() !== req.user._id.toString()) {
          users.push({
            ...participant._doc,
            lastMessage: conversation.lastMessage,
          });
        }
      });
    });

    let uniqueUsers = Array.from(
      new Set(users.map((user) => user._id.toString()))
    ).map((id) => users.find((user) => user._id.toString() === id));

    return res.status(200).json(uniqueUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const changeUserImg = async (req, res) => {
  console.log(req.file, "lljk");

  try {
    //uploading the image to the cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await usermodal.findByIdAndUpdate(req.user._id, {
      profileimg: result.secure_url,
    });
    return res.status(201).json({
      _id: user._id,
      full: user.name,
      username: user.username,
      profileimg: user.profileimg,
      token_: req.token_,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload image" });
  }
};
