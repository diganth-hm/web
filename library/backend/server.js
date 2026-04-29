const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

app.use(express.json());

app.post("/signup", async (req, res) => {

    try {

        const { email, password } = req.body;

        // check user existence
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        // save user
        await newUser.save();

        res.json({
            success: true,
            message: "User created"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});