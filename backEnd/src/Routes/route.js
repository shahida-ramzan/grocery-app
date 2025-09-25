import express from 'express';
import {
  addItem,
  getAllItems,
  getItemById,
  removeItem,
  updateItem
} from '../Controllers/controller.js';

const router = express.Router();

router.post("/items", addItem);        // Create item
router.get("/items", getAllItems);     // Get all items
router.get("/items/:id", getItemById); // Get single item
router.patch("/items/:id",updateItem ); // Update item quantity
router.delete("/items/:id", removeItem);   // Delete item

export default router;
