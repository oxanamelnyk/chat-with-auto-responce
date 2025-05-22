import express from "express";
import {
  createMessage,
  getMessagesByChat,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:chatId", getMessagesByChat);
router.post("/", createMessage);

export default router;
