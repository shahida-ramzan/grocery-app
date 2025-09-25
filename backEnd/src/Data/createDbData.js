import pool from '../Config/db.js';

const createGroceryTable = async ()=>{
const query = `
CREATE TABLE IF NOT EXISTS items (
id SERIAL PRIMARY KEY,
ItemList VARCHAR(100) NOT NULL,
Quantity INTEGER NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const client = await pool.connect();

try{
    await client.query(query);
} catch (error){
    console.error("Error Creating Items table:", error);
    throw error;
} finally{
    client.release();
}
};


export default createGroceryTable