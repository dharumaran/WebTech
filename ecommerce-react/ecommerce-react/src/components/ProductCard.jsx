import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-pink-50">
      <img src={product.image} alt={product.name} className="h-40 object-contain mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-pink-700 font-bold mb-2">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="bg-pink-300 px-4 py-2 rounded hover:bg-pink-400"
      >
        View
      </Link>
    </div>
  );
}

export default ProductCard;
