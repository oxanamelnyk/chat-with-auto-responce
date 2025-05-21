import express from "express";
import { getChats } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/users", getChats);
export default router;
