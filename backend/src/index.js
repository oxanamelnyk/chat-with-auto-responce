import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import chatRoutes from "./routes/chat.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.use(express.json());
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on the port ${PORT}`);
  connectDB();
});
