import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5000;

connectDB();//whenever u call this function mongoose will secure a monnection with mongo

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('new API is running....');
  });

app.use('/api/users',userRoutes);

app.listen(port,() => 
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));