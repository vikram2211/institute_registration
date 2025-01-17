import express from "express";
const router = express.Router();

import {createInst, getInst } from "../controllers/instituteController.js";

router.post("/create/institute", createInst);
router.get("/get/institute", getInst);

export default router;
