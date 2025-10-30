import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([
    { id: 1, image: "/sample1.jpg", caption: "Art vibes 🎨", likes: 2, comments: [] },
    { id: 2, image: "/sample2.jpg", caption: "Green feels 🌿", likes: 1, comments: [] },
  ]);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <div className="app">
        {user && <Navbar user={user} onLogout={handleLogout} />}
        <main className="content">
          <Routes>
            {!user ? (
              <>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
                <Route path="/add" element={<AddPost posts={posts} setPosts={setPosts} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
