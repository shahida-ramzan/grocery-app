import express from 'express';
import basketRoutes from './src/Routes/route.js';
import dotenv from 'dotenv';
import pool from './src/Config/db.js';
import createGroceryTable from './src/Data/createDbData.js';
import addColumnInTable from './src/Data/addColumn.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Grocery APP');
});

// DB connection check
app.get("/checkdb", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("SELECT NOW()");
    res.send("✅ Database connection OK");
  } catch (error) {
    res.status(500).send("❌ Database connection failed");
  } finally {
    client.release();
  }
});

// Basket routes
app.use("/basket", basketRoutes);

// Create table on startup
createGroceryTable();
addColumnInTable();

app.listen(PORT, () => {
  console.log(` Server running on PORT: ${PORT}`);
});
