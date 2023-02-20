const express=require("express");
const {connection}=require("./db.js");
const {userRouter}=require("./routes/user.route.js");

const app=express();

app.use(express.json());
app.use("/users",userRouter);
app.use("/posts",userRouter);
app.get("/",(req,res)=>{
    res.send("Welcome brother");
})



app.listen(4500,async()=>{
    try{
        await connection;
        console.log("The port is running at 4500");
    }

    catch(err){
      console.log(err);
    }

    
})