const bcrypt = require("bcryptjs");
const user = require ("./models/user");

app.post("/signup",async (req,res) =>{

    try{
        const {email,password}=req.body;

        //check the user exisstence
        const existingUser = await UserActivation.findOne({email});
        if (existingUser)
        {
            return res.json({sucess:false,message:"User already exisits"});

        }
        const newUser =new user({
            email,
            passwword:hashedPassword
        });
       await newUser.save();

       res.json({sucess :true ,message:"user created"});

        }

        catch(error){
            console.error(error);
            res.status(500).json({success:false});

        }
});