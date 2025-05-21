import Chat from "../models/chat.model.js";

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.status(200).json(chats);
  } catch (error) {
    console.log(("Error in getChats:", error.message));
    res.status(500).json({ error: "Failed to fetch chats" });
  }
};

export const createChat = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      return res.status(400).json({ error: "First and last name required" });
    }

    const newChat = await Chat.create({ firstName, lastName });
    res.status(201).json(newChat);
  } catch (error) {
    console.error("Error in createChat:", error.message);
    res.status(500).json({ error: "Failed to create chat" });
  }
};
