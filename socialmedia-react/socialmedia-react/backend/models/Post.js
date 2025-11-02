import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  caption: { type: String, required: true },
  image: { type: String }, // optional: image URL
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);
export default Post;
