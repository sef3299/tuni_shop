const express=require("express");
const { payment } = require("../controller/Controller");
const paymentrouter = express.Router();
paymentrouter.post("/payment",payment)
module.exports=paymentrouter