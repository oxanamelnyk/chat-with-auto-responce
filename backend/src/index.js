import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import chatRoutes from "./routes/chat.routes.js";
import messageRoutes from "./routes/message.routes.js";
// import path from "path";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());

// API Routes
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "../frontend/dist")));

  // Use regular expression instead of '*' (for Express v5)
  app.get(/(.*)/, (req, res) => {
    res.sendFile(join(__dirname, "../frontend/dist/index.html"));
  });
} else {
  // Development-only route
  app.get("/", (req, res) => {
    res.send("hello from backend");
  });
}

// Start server
app.listen(process.env.PORT, () => {
  console.log(`server is running on the port ${PORT}`);
  connectDB();
});
