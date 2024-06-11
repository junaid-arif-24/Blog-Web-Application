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
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ success: false, status, message: message});  
}

)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))