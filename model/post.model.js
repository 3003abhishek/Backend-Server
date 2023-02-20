const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    title:String,
    body:String,
    device:String,
    no_if_comments:Number,
});


const postModel=mongoose.model("userposts",userSchema);

module.exports={
    postModel
}