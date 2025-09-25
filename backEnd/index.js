import express from 'express';
import basketRoutes from './src/Routes/route.js'

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Grocery APP');
});
 app.use("/basket", basketRoutes);

app.listen(PORT, ()=> {
console.log(`My Server is runing on PORT: ${PORT}` );
}
) 