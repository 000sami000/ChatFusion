import conversationmodal from "../models/conversation.model.js";
import messagemodal from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id } = req.params;
  const senderId = req.user._id;
  try {
    let conversation = await conversationmodal.findOne({
      participants: { $all: [senderId, id] },
    });

    if (!conversation) {
      conversation = await conversationmodal.create({
        participants: [senderId, id],
      });
    }

    const newMessage = new messagemodal({
      senderId,
      receiverId: id,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      conversation.lastMessage = newMessage.message;
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    const receiverSocketId = getReceiverSocketId(newMessage.receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(200).json({ newMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getmessages = async (req, res) => {
  try {
    const { id } = req.params;
    const senderId = req.user._id;
    const conversation = await conversationmodal
      .findOne({
        participants: { $all: [senderId, id] },
      })
      .populate("messages");
    if (conversation == null) {
      return res.status(200).json({ messages: [] });
    }
    res.status(200).json({ messages: conversation.messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
