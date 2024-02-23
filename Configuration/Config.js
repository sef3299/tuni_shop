const mongoose = require('mongoose')
const connectdb=async()=>{
    try {
    await mongoose.connect('mongodb+srv://seifabichou20:hVpx969hGRMIK1ez@cluster0.tyryzzc.mongodb.net/?retryWrites=true&w=majority')
    console.log("database is connected")
    } catch (error) {
        console.log("database is not connected", error)
        
    }
}
module.exports = connectdb