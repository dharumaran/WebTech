import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "./services/postService";

export default function AddPostServer({ onCreated }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!caption) return alert("Caption required");
    try {
      setLoading(true);
      const post = await createPost({ image, caption });
      setLoading(false);
      if (onCreated) onCreated(post);
      navigate("/");
    } catch (err) {
      setLoading(false);
      const msg = err?.response?.data?.message || err.message;
      alert("Error creating post: " + msg);
    }
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Add Post"}
        </button>
      </form>
    </div>
  );
}
