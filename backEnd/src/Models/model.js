import pool from "../Config/db.js";

// Add Item
export const addItemService = async (item) => {
  const client = await pool.connect();
  try {
    const { ItemList, Quantity } = item;
    const result = await client.query(
      "INSERT INTO items (ItemList, Quantity) VALUES ($1, $2) RETURNING *",
      [ItemList, Quantity]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

// Get All Items
export const getAllItemsService = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM items ORDER BY id ASC");
    return result.rows;
  } finally {
    client.release();
  }
};

// Get Single Item by ID
export const getItemByIdService = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM items WHERE id = $1", [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

// Update 
export const updateItemService = async ({ id, ItemList, Quantity }) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "UPDATE items SET ItemList = $1, Quantity = $2 WHERE id = $3 RETURNING *",
      [ItemList, Quantity, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};

// Remove Item
export const removeItemService = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "DELETE FROM items WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
};
