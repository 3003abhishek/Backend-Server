const express=require("express");
const {postModel}=require("../model/post.model.js");
const postRouter=express.Router();




postRouter.get("/",async(req,res)=>{
    try{
        let qury=req.query;
        const data=await mobilemodel.find(qury);
        res.send(data)
    }
    catch(err)
    {
console.log(err)
    }
})
postRouter.post("/",async(req,res)=>{
    const payload=req.body;
    try{
       const new_post=new postModel(payload);
       await new_post.save();
        res.send("Post added successfully");
    }
    catch(err)
    {
console.log(err)
    }
})
postRouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id;
    let payload=req.body;
    try{
        await postModel.findByIdAndUpdate({_id:id},payload);
        res.send(`Post updated succefully for the id:${id}`)
    }
    catch(err)
    {
console.log(err)
    }
})
postRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id;
    try{
        await postModel.findByIdAndDelete(id);
        res.send(`post with id:${id} deleted successfully`)
    }
    catch(err)
    {
console.log(err)
    }
})













module.exports={
    postRouter
}