import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participents: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participents: [senderID, receiverID],
      });
    }
    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // socket.io functionality will be added here

    await Promise.all([conversation.save(), newMessage.save()]);
    return res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal server Issue!" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: uerToChat } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participents: { $all: [senderId, uerToChat] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal server Issue!" });
  }
};
