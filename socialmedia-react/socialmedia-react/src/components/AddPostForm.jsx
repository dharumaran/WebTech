import React, { useState } from "react";

export default function AddPostForm({ onAdd }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !caption) return alert("Both fields required!");
    onAdd({ image, caption });
    setImage("");
    setCaption("");
  };

  return (
    <form className="add-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}