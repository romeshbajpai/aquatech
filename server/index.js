const express = require('express');
require("dotenv").config();
const port = process.env.PORT;
const userroute = require('./user.route/userroute.js')
const app = express();
c
const connectDB =require("./config.js/db.js")
connectDB();
app.use(cors());
app.use("/myapi",userroute)

app.listen(port,()=>{
    console.log(`your application is running on ${port}`);
});
