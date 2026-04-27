const express =  require("express");
const cors= require("cors");

const app  = express ();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("API running");

});
app.listen(5000,() =>{
    console.log("server Running on port 5000");
});

//login route

app.post("/login",(req,res)=>{
    const{email,password}=req.body;

    //just for testsing 
    if(email=="diganthhm714@gmail.com" && password == "12345678"){
        res.json({success:true});
    }
    else{
        res.json({success:false});
    }
});
