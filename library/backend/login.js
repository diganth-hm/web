
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const express = require("express");
const app = express();

app.use(express.json());


app.post("/login",async (req,res) => {

    try{
        const {email,password} =req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.json({success:false,message:"user not found"});

        }
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatching ){
            return res.json({success:false,message:"invalid password"  });

        }
        res.json({sucess:true});
       }
       catch(error)
       {
        console.error(error);
        res.status(500).json({sucess:false});
       }
});