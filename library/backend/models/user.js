const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  usn: {
    type: String,
    required: true,
    unique: true,
    match: [/^4AL\d{2}CS\d{3}$/, "Invalid USN format"]
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: ""
  },
  rfid: {
    type: String,
    unique: true
  },
  role: {
    type: String,
    default: "user"
  }
}, { timestamps: true });

userSchema.pre("save", function (next) {
  if (!this.rfid) {
    this.rfid = "RFID" + Math.floor(100000 + Math.random() * 900000);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);