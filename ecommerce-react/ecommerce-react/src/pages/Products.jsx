import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  // ✅ Fetch products from backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="bg-pink-50 py-10 relative">
      {showConfetti && <Confetti width={width} height={height} />}

      <h2 className="text-center text-3xl font-semibold text-pink-700 mb-8">
        Our Collection
      </h2>

      {/* ✅ Show loading or empty state */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-8">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => handleCardClick(product._id)}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-4 text-center cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-pink-700">
                {product.name}
              </h3>
              <p className="text-gray-500 mb-2">Rs.{product.price.toFixed(2)}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-pink-300 hover:bg-pink-400 px-4 py-2 rounded transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
