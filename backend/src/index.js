import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on the port ${PORT}`);
  connectDB();
});
