const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.fbx7ael.mongodb.net/linkdin?retryWrites=true&w=majority");



module.exports={
    connection
}
