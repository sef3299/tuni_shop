const mongoose = require('mongoose')
const product_schema=new mongoose.Schema({
    category:String,
    description:String,
    image:String,
    price:Number,
    title:String,
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
},{ timestamps:true})
module.exports = mongoose.model('products', product_schema)