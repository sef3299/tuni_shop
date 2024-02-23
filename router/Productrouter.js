const express=require("express");
const { addproduct, deleteproduct, updateteproduct, getproduct, myproducts } = require("../controller/ProductController");
const { isauth } = require("../Middleware/Isauth");


const productrouter = express.Router();
productrouter.post("/create",isauth,addproduct)
productrouter.get("/getmyproduct",isauth,myproducts)
productrouter.get("/get",getproduct)
productrouter.delete("/delete/:id",deleteproduct)
productrouter.put("/update/:id",updateteproduct)
module.exports=productrouter