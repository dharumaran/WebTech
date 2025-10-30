const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  caption: { type: String, required: true },
  image: { type: String },
  likes: { type: Number, default: 0 },
  comments: [
    {
      text: String,
      author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);
