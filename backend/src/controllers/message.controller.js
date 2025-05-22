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
          const { data } = await axios.get("https://api.quotable.io/random");
          await Message.create({
            chatId,
            content: `💬 ${data.content} — ${data.author}`,
            senderType: "bot",
          });
        } catch (error) {
          console.error("Failed to fetch quote:", error.message);
        }
      }, 3000);
    }
  } catch (error) {
    console.error("Create message error:", error.message);
    res.status(500).json({ error: "Failed to send message" });
  }
};
