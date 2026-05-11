require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Library API Running...");
});

app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});