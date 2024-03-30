const express=require("express");
const app=express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv=require("dotenv");
dotenv.config();

const mongoose=require("mongoose");

app.use(express.json());

app.use("/users",userRouter); 
app.use("/notes",noteRouter);


app.get("/",(req,res)=>{
    res.send("Notes api made by aditya chauhan");
});

mongoose.connect(process.env.URL)
.then(()=>{

    app.listen(4000,()=>{
        console.log("Server started on port no. 4000");
     });

})
.catch((error)=>{
    console.log(error);
})

