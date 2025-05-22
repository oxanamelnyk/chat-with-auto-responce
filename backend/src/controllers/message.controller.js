import Message from "../models/message.model.js";
import axios from "axios";

export const getMessagesByChat = async (req, res) => {
  try {
    const { chatId } = req.params;
    const messages = await Message.find({ chatId }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

export const createMessage = async (req, res) => {
  try {
    const { chatId, content, senderType } = req.body;

    const newMessage = await Message.create({ chatId, content, senderType });
    res.status(201).json(newMessage);

    if (senderType === "user") {
      setTimeout(async () => {
        try {
          const { data } = await axios.get("https://zenquotes.io/api/random");
          const quote = data[0];

          await Message.create({
            chatId,
            content: quote.q,
            senderType: "bot",
          });
        } catch (err) {
          console.error("Failed to fetch quote:", err.message);
        }
      }, 3000);
    }
  } catch (error) {
    console.error("Create message error:", error.message);
    res.status(500).json({ error: "Failed to send message" });
  }
};
