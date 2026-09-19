const express = require('express');
const cors = require('cors');
require("dotenv").config();

const connectDB = require('./config/db');
const contactRoutes= require('./routes/contactRoutes')
const app=express();

connectDB()
//midleware
app.use(cors())
app.use(express.json())

app.use("/api/contact", contactRoutes)
//test route 
app.get("/",(req,res)=>{
    res.send("server is running")
})

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})

