import express from "express";
import {
  createChat,
  getChats,
  updateChat,
  deleteChat,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/", getChats);
router.post("/", createChat);
router.put("/:id", updateChat);
router.delete("/:id", deleteChat);

export default router;
