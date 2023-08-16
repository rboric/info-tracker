const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Controllers
const { registerUser, loginUser } = require("./controllers/authController");
const {
  createNote,
  getNotes,
  deleteNote,
} = require("./controllers/noteController");

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.m5nbwb2.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

// Set up the app
const app = express();
const PORT = process.env.PORT;

// Middleware
const verifyToken = require("./middleware/authMiddleware");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// User registration route
app.post("/register", registerUser);

// User login route
app.post("/login", loginUser);

app.get("/dashboard", verifyToken, getNotes);

app.post("/note", verifyToken, createNote);

app.delete("/note/:id", verifyToken, deleteNote);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
