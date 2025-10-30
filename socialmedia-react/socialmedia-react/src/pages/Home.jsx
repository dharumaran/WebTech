import React from "react";
import PostCard from "../components/PostCard";

export default function Home({ posts }) {
  return (
    <div className="home">
      <h2>Explore Posts</h2>
      <div className="post-grid">
        {posts.length > 0 ? (
          posts.map((p) => <PostCard key={p.id} image={p.image} caption={p.caption} />)
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
    </div>
  );
}
