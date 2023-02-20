const express=require("express");
const {userModel}=require("../model/user.model.js");

const jwt=require("jsonwebtoken");
const userRouter=express.Router();



userRouter.post("/register",async(req,res)=>{
    try{

        let payload=req.body;
        const new_user=new userModel(payload);
        await new_user.save();
        

        res.send(new_user);
    }
    catch(err){
      res.send("Wrong credentials");
    }
 
});


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    let  loged_user=await userModel.find({email,pass});
    if(loged_user.length>0){
        jwt.sign({course:"backend"},"masai",(err,token)=>{
            res.send({"msg":"logged in","token":token});
        });
    
    }
    else{
        res.send("Wrong credentials");
    }
})










module.exports={
    userRouter
}