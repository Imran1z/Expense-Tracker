const express = require("express")
const cors = require("cors");
const connectToMongoDB = require("./db/db");
const app =express()
const {readdirSync}=require('fs');
const { route } = require("./routes/transactions.js");
require('dotenv').config();
const PORT = process.env.PORT;



//midllewares
app.use(express.json())
app.use(cors())

//routes
readdirSync("./routes").map((route)=>app.use("/api/v1",require('./routes/'+route)))



const server = async ()=>{
   await connectToMongoDB();
    app.listen(PORT,()=>{
        console.log("Server is up and runing at : ",PORT);
    })
}

server();