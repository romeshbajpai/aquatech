const mongoose = require("mongoose");
require("dotenv").Config()
DATABAE_URL = process.env.MONGO_URL

const  connectDB = async (DATABAE_URL)=>{
    try {
       const DBconnection =  mongoose.connect(DATABAE_URL);
       console.log("DB connected succesfully");
    } catch (error) {
        console.log("Error in connection",error);
    }
}