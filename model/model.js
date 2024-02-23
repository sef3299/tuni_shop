const mongoose = require('mongoose')
const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:String,
    bio:String,
    role:{type:String,default:"user"}
})
module.exports = mongoose.model('user', user_schema)