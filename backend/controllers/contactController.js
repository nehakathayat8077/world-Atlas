const Contact = require("../models/contact")
const createContact = async (req,res)=>{
    try{
        const {name , email , message}= req.body;
        const newContact = new Contact({
            name , email , message
        })
        await newContact.save()
        res.status(201).json({
            message:"Contact saved successfully"
        })

    }catch(error){
        res.status(500).json({
            message:"Failed to save the Contact",
            error:error.message
        })
    }
}
module.exports={createContact}