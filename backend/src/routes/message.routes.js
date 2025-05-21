import express from "express";
import { getMessagesByChat } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:chatId", getMessagesByChat);

export default router;