require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://yuvarajv787:a12345678@cluster0.qmwbm47.mongodb.net/?retryWrites=true&w=majority")
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}