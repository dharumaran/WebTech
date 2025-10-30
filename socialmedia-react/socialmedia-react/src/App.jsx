import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://source.unsplash.com/random/300x300?art",
      caption: "Art vibes 🎨",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/300x300?nature",
      caption: "Nature is peace 🌿",
    },
  ]);

  const addNewPost = (newPost) => {
    setPosts((prev) => [{ id: Date.now(), ...newPost }, ...prev]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/add" element={<AddPost addNewPost={addNewPost} />} />
      </Routes>
    </Router>
  );
}
