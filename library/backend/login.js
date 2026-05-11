const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { usn, password } = req.body;

    const user = await User.findOne({ usn });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid password"
      });
    }

    res.json({
      success: true,
      user
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false
    });
  }
});

module.exports = router;