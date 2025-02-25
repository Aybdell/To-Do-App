import express from 'express';
import 'dotenv/config'; 
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(express.json());


// creat users 
app.use('/users', userRoutes);
app.use('/task', taskRoutes);



const PORT = process.env.PORT || 3000;
//preaper the server
app.listen(PORT, () => {
    console.log(`the server is running at the port  ${PORT} `);
})


