import React, { useState } from "react";

export default function Home({ posts, setPosts }) {
  const [commentText, setCommentText] = useState({});

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleComment = (id) => {
    if (!commentText[id]) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, commentText[id]] }
          : p
      )
    );
    setCommentText((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="home">
      <h2>Explore Posts</h2>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt="Post" />
            <p>{post.caption}</p>
            <div className="actions">
              <button onClick={() => handleLike(post.id)}>❤️ {post.likes}</button>
            </div>
            <div className="comments">
              {post.comments.map((c, i) => (
                <p key={i} className="comment">💬 {c}</p>
              ))}
              <div className="comment-box">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText[post.id] || ""}
                  onChange={(e) =>
                    setCommentText((prev) => ({ ...prev, [post.id]: e.target.value }))
                  }
                />
                <button onClick={() => handleComment(post.id)}>Send</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}