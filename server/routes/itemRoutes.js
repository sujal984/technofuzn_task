import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  searchItems,
  getStats,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/search", searchItems);
router.get("/stats", getStats);

router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
