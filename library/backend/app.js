const express = require("express");
const app = express();

app.use(express.json());

let books = [];
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.get("/books", (req, res) => {
  res.send(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.send("Book added");
});

app.delete("/books", (req, res) => {
  books = [];
  res.send("All books deleted");
});

app.listen(3000, () => {
  console.log("Server running");
});