const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require ('dotenv').config();

const connectDB = require("./config/connectDB");
const eventRoutes = require("./routes/eventRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

//connect to database
connectDB();
 /* Enable CORS restricted strictly to the React frontend domain
 const corsOptions = {
   origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   allowedHeaders: ['Content-Type', 'Authorization'],
   credentials: true
 };

 app.use(cors(corsOptions)); */

 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended:true }));
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
 // API Routes
 app.use("/api/events", eventRoutes);

 // Fallback error handler for any uncaught synchronous route exceptions
 app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).json({success:false, message:'An internal server error occurred.'});
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser to view the client.`);
});