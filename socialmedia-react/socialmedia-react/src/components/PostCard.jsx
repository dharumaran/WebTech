import React from "react";

export default function PostCard({ image, caption }) {
  return (
    <div className="post-card">
      <img src={image} alt={caption} />
      <p>{caption}</p>
    </div>
  );
}
