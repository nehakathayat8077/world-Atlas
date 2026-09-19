const mongoose = require('mongoose');
const mongooseDB=async ()=>{
    try{
        await mongoose.connect( process.env.MONGO_URI);
        console.log("db connected")
    }catch(error){
        console.log("mongoose connection failed",error.message)
        process.exit(1);
    }


}
module.exports=mongooseDB