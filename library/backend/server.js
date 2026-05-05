const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
// connect database
connectDB();


app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { name, department, section, usn, password } = req.body;

    const existingUser = await User.findOne({ usn });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      department,
      section,
      usn,
      password: hashedPassword
    });

    await newUser.save();

    res.json({
      success: true,
      message: "User created"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});