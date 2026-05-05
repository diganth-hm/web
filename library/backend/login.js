
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const express = require("express");
const app = express();

app.use(express.json());


app.post("/login",async (req,res) => {

    try{
        const {usn,password} =req.body;
        const user = await User.findOne({usn});
        if (!user){
            return res.json({success:false,message:"user not found"});

        }
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch){
            return res.json({success:false,message:"invalid password"  });

        }
        res.json({sucess:true,user});
       }
       catch(error)
       {
        console.error(error);
        res.status(500).json({success:false});
       }
});