import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/pink_stationary_hero.jpg"; // make sure this image exists

function Home() {
  return (
    <div className="bg-pink-50">
      {/* Text Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-pink-700">
          HoneyPie Stationery
        </h1>
        <p className="text-pink-500 mb-6">
          What a way to brighten your day!!
        </p>
        <Link
          to="/products"
          className="bg-pink-300 px-6 py-3 rounded hover:bg-pink-400 transition duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Hero Image Section */}
      <div className="w-full">
        <img
          src={heroImg}
          alt="Pink aesthetic stationery set"
          className="w-full object-cover h-[60vh] md:h-[80vh] rounded-t-3xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
