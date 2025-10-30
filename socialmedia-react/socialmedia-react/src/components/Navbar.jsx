import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <h1 className="logo">MiniSocial</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Post</Link>
        <span className="user">Hi, {user}</span>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}
