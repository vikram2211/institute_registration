import express from "express";
const router = express.Router();

import { createBoard ,getBoard} from "../controllers/boardController.js";
// console.log("eijfbwqeb");

router.post("/create/board", createBoard);
// router.get("/get/institute", getInst);
router.get("/get/board", getBoard);

export default router;
