import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MiniSocial
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Post</Link>
      </div>
    </nav>
  );
}
