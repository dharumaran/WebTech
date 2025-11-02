import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost({ posts, setPosts }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      image,
      caption,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    navigate("/");
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}