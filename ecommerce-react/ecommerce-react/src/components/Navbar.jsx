import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-200 p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-pink-700">Pink Stationery</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-pink-900">Home</Link>
        <Link to="/products" className="hover:text-pink-900">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
