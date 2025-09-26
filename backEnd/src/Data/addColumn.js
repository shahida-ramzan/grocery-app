import pool from '../Config/db.js';

const addColumnInTable = async ()=>{
    const query = `
    ALTER TABLE items 
    ADD COLUMN IF NOT EXISTS is_BuyItem BOOLEAN DEFAULT FALSE NOT NULL;`

    const client = await pool.connect();

   try{
    await client.query(query);
} catch (error){
    console.error("Error Creating New Column:", error);
    throw error;
} finally{
    client.release();
}
};

export default addColumnInTable;