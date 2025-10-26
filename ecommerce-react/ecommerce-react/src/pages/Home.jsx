import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-20 bg-pink-50">
      <h1 className="text-5xl font-bold mb-6 text-pink-700">Pink Aesthetic Stationery</h1>
      <p className="text-pink-500 mb-6">Cute, pastel, and pink items to brighten your desk!</p>
      <Link to="/products" className="bg-pink-300 px-6 py-3 rounded hover:bg-pink-400">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
