import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    provider: {
      type: String,
      default: "local",
    },
    googleId: {
      type: String,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;
