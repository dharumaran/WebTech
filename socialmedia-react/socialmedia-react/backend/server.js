import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Post from "./models/Post.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// Sample route
app.get("/", (req, res) => {
  res.send("Social Media API is running...");
});

// Add Post
app.post("/api/posts", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Posts
app.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
