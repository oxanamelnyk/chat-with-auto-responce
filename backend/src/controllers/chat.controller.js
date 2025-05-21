import User from "../models/user.model.js";

export const getChats = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(("Error in getChats:", error.message));
    res.status(500).json({ error: "Failed to fetch chats" });
  }
};
