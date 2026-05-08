require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// connect DB
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Library API Running...");
});

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});  