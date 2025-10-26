import React from "react";
import { products } from "../mockProducts";
import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  return (
    <div className="bg-pink-50 py-10">
      <h2 className="text-center text-3xl font-semibold text-pink-700 mb-8">
        Our Collection
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-pink-700">{product.name}</h3>
            <p className="text-gray-500 mb-2">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-300 hover:bg-pink-400 px-4 py-2 rounded transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
