const express = require("express");
const auth = require("../middleware/auth");
const Post = require("../models/Post");
const router = express.Router();

// create post
router.post("/", auth, async (req, res) => {
  try {
    const { image, caption } = req.body;
    if (!caption) return res.status(400).json({ message: "Caption required" });

    const post = new Post({
      author: req.user.id,
      caption,
      image: image || ""
    });
    await post.save();
    await post.populate("author", "username");
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// get all posts (recent first)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username").sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// like post
router.post("/:id/like", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    post.likes += 1;
    await post.save();
    res.json({ likes: post.likes });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// add comment
router.post("/:id/comments", auth, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Comment empty" });
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ text, author: req.user.id });
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
