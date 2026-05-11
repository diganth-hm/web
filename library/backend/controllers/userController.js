
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// SIGNUP
exports.signup = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    const { name, department, section, usn, password } = req.body;

    const existingUser = await User.findOne({ usn });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
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

    res.json({ success: true, message: "User created" });

  }catch (error) {
  console.error("SIGNUP ERROR:", error);

  res.status(500).json({
    success: false,
    error: error.message
  });
}
};

exports.login = async (req, res) => {
  try {
    const { usn, password } = req.body;

    // check user
    const user = await User.findOne({ usn });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid password"
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      user
    });

  }catch (error) {
  console.error("ERROR:", error); 

  res.status(500).json({
    success: false,
    error: error.message   
  });
} 
};