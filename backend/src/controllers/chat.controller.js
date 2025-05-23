import Chat from "../models/chat.model.js";

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.aggregate([
      {
        $lookup: {
          from: "messages",
          let: { chatId: "$_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$chatId", "$$chatId"] } } },
            { $sort: { createdAt: -1 } },
            { $limit: 1 },
            { $project: { content: 1, _id: 0 } },
          ],
          as: "lastMessage",
        },
      },
      {
        $addFields: {
          lastMessage: { $arrayElemAt: ["$lastMessage.content", 0] },
        },
      },
    ]);

    res.status(200).json(chats);
  } catch (error) {
    console.error("Error in getChats:", error.message);
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

export const updateChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      return res.status(400).json({ error: "First and last name required" });
    }

    const updatedChat = await Chat.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true }
    );

    if (!updatedChat) {
      return res.status(404).json({ error: "Chat not found" });
    }

    res.status(200).json(updatedChat);
  } catch (error) {
    console.error("Error in updateChat:", error.message);
    res.status(500).json({ error: "Failed to update chat" });
  }
};

export const deleteChat = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedChat = await Chat.findByIdAndDelete(id);

    if (!deletedChat) {
      return res.status(404).json({ error: "Chat not found" });
    }

    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    console.error("Error in deleteChat:", error.message);
    res.status(500).json({ error: "Failed to delete chat" });
  }
};
