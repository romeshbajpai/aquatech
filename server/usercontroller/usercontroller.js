const mongoose = require('mongoose');
const UserModel = require('../usermodel/user.model');
const jwt = require('jsonwebtoken');
const  bcrypt = require('bcrypt');
require("dotenv").Config()


const Register  = async (req,res)=>{
    try {
        const  {username, email,password} = req.body;
        const userEXist = await UserModel.findOne({email:email})
        if(userEXist){
            res.status(200).json({message:"User is Already exist!!"})
        }
        const hashPassword = bcrypt.hash(password,10)
        const user  = await UserModel.create({username:username,email:email,password:password})
        return res.status(200).json({message:"User is Registered Succesfully!!"})
    } catch (error) {
        res.status(500).json({message:error.error})
    }
}

const Login = async (req,res)=>{
    try {
    const  {email,password} = req.body;
    const isPresent = await UserModel.findOne({email})
    if (!isPresent) {
        return res.status(200).json({message:"User is not Registered!!"})
    }
    const matchpassword = bcrypt.compare(password,isPresent.password);
    if (!matchpassword) {
        return res.status(200).json({message:"Please Enter your correct password!!"})
    }
   const token =  jwt.sign({isPresent},process.env.SECRET_KEY)
   return res.status(200).json({message:"User is login Succesfully!!",token})
    } catch (error) {
        res.status(500).json({message:error.error})
    }
}




module.exports = {Login,Register}