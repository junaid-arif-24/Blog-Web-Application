import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
// Load environment variables from .env file
dotenv.config();
const app = express()
const port = 3000
app.use(express.json());
mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("MongoDB is connected");
})
app.use('/api/user',userRoute )
app.use('/api/auth', authRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))