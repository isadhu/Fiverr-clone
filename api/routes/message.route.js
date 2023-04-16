import express from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();


export default router;
