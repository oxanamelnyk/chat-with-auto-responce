import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import chatRoutes from "./routes/chat.routes.js";
import messageRoutes from "./routes/message.routes.js";

import path from "path";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.use(express.json());
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`server is running on the port ${PORT}`);
  connectDB();
});
