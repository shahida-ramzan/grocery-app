import express from 'express';
import basketRoutes from './src/Routes/route.js'
import dotenv from 'dotenv';
import pool from './src/Config/db.js'
dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Grocery APP');
});
 app.use("/basket", basketRoutes);
 app.get("/checkdb",async (req, res)=>{
    const client = await pool.connect();
    res.send("check console for db");
});

app.listen(PORT, ()=> {
console.log(`My Server is runing on PORT: ${PORT}` );
}
) 