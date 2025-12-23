import Item from "../models/Item.js";

export const getItems = async (_, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch items", error: error.message });
  }
};

export const createItem = async (req, res) => {
  try {
    // Validation
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (req.body.title.length < 3) {
      return res
        .status(400)
        .json({ message: "Title must be at least 3 characters" });
    }

    if (req.body.title.length > 100) {
      return res
        .status(400)
        .json({ message: "Title must not exceed 100 characters" });
    }

    if (req.body.description && req.body.description.length > 500) {
      return res
        .status(400)
        .json({ message: "Description must not exceed 500 characters" });
    }

    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error creating item:", error);
    res
      .status(500)
      .json({ message: "Failed to create item", error: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    // Validation
    if (req.body.title && req.body.title.length < 3) {
      return res
        .status(400)
        .json({ message: "Title must be at least 3 characters" });
    }

    if (req.body.description && req.body.description.length > 500) {
      return res
        .status(400)
        .json({ message: "Description must not exceed 500 characters" });
    }

    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("Error updating item:", error);
    res
      .status(500)
      .json({ message: "Failed to update item", error: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully", id: req.params.id });
  } catch (error) {
    console.error("Error deleting item:", error);
    res
      .status(500)
      .json({ message: "Failed to delete item", error: error.message });
  }
};

// Search items
export const searchItems = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const items = await Item.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });

    res.json(items);
  } catch (error) {
    console.error("Error searching items:", error);
    res
      .status(500)
      .json({ message: "Failed to search items", error: error.message });
  }
};

// Get item statistics
export const getStats = async (req, res) => {
  try {
    const totalItems = await Item.countDocuments();
    const itemsWithMedia = await Item.countDocuments({
      media: { $exists: true, $ne: "" },
    });
    const latestItem = await Item.findOne().sort({ createdAt: -1 });

    res.json({
      totalItems,
      itemsWithMedia,
      itemsWithoutMedia: totalItems - itemsWithMedia,
      latestItem,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch statistics", error: error.message });
  }
};
