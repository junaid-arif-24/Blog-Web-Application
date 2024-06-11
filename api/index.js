import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const app = express()
const port = 3000

mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("MongoDB is connected");
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))