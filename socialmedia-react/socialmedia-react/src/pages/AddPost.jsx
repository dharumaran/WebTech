import React from "react";
import AddPostForm from "../components/AddPostForm";

export default function AddPost({ addNewPost }) {
  return (
    <div className="add-post-page">
      <h2>Add a New Post</h2>
      <AddPostForm onAdd={addNewPost} />
    </div>
  );
}
