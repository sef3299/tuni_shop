const express=require("express")
const { register, login, getcurrent, updateteuser } = require('../controller/Controller');
const { registervalidation, validation, loginvalidation } = require('../Middleware/Validation');
const {isauth}=require("../Middleware/Isauth");
const { sendEmail } = require("../controller/Mailcontroller");




const userrouter = express.Router();

userrouter.post("/register",registervalidation,validation,register)
userrouter.post("/login",loginvalidation,validation,login)
userrouter.put("/update/:id",updateteuser)
userrouter.post("/sendemail",sendEmail)
userrouter.get("/getcurrentuser",isauth,getcurrent)


module.exports =userrouter;


