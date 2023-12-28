const mongoose = require("mongoose");

const userSchema  =  mongoose.Schema({
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true})

const usermodel = userSchema.Model("user",userSchema)
exports.module = {usermodel}
