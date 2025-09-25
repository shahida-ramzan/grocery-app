import {
  addItemService,
  getAllItemsService,
  getItemByIdService,
  removeItemService,
  updateItemService
} from "../Models/model.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

// Add Item
export const addItem = async (req, res) => {
  try {
    const newItem = await addItemService(req.body);
    handleResponse(res, 201, "Item Created Successfully", newItem);
  } catch (error) {
    handleResponse(res, 500, "Error Creating Item", error.message);
  }
};

// Get All Items
export const getAllItems = async (req, res) => {
  try {
    const items = await getAllItemsService();
    handleResponse(res, 200, "Items Fetched Successfully", items);
  } catch (error) {
    handleResponse(res, 500, "Error Fetching Items", error.message);
  }
};

// Get Single Item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await getItemByIdService(req.params.id);
    if (item) {
      handleResponse(res, 200, "Item Fetched Successfully", item);
    } else {
      handleResponse(res, 404, "Item Not Found");
    }
  } catch (error) {
    handleResponse(res, 500, "Error Fetching Item", error.message);
  }
};

// Update
export const updateItem = async (req, res) => {
  try {
    const data = { id: req.params.id, ...req.body };
    const updatedItem = await updateItemService(data);
    if (updatedItem) {
      handleResponse(res, 200, "Item Updated Successfully", updatedItem);
    } else {
      handleResponse(res, 404, "Item Not Found");
    }
  } catch (error) {
    handleResponse(res, 500, "Error Updating Item", error.message);
  }
};


// Remove Item
export const removeItem = async (req, res) => {
  try {
    const item = await removeItemService(req.params.id);
    if (item) {
      handleResponse(res, 200, "Item Removed Successfully", item);
    } else {
      handleResponse(res, 404, "Item Not Found");
    }
  } catch (error) {
    handleResponse(res, 500, "Error Removing Item", error.message);
  }
};
