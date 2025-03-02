const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const ConnectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected');
  } catch (err) {
      console.error('MongoDB connection error',err);
  }
};

ConnectDB();


// Simple API Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
