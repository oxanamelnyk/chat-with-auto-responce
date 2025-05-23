import mongoose from "mongoose";
import dotenv from "dotenv";
import Chat from "./models/chat.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const predefinedChats = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
  { firstName: "Carol", lastName: "Williams" },
];

const existingChats = await Chat.find();

if (existingChats.length === 0) {
  await Chat.insertMany(predefinedChats);
  console.log("Predefined chats inserted");
} else {
  console.log("Chats already exist, skipping insert");
}

mongoose.disconnect();
