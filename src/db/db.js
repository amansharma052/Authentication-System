const mongoose =require("mongoose")

async function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("server is connected to DB")
    } catch (error) {
        console.log("unable to connect to db",error)
        
    }
}
module.exports=connectDB;