import express from 'express';
import { addItem, getItem, removeItem, updateItemQty } from '../Controllers/controller.js';
const router = express.Router();

router.post("/items", addItem);
router.get("/items", getItem);
router.patch("/items/:id", updateItemQty);
router.delete("/items/:id", removeItem);


export default router