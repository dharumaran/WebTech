import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../mockProducts";
import { useCart } from "../context/CartContext";
import { Star } from "lucide-react"; // for rating stars

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center text-gray-500">Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-10 bg-pink-50 rounded-xl shadow-md">
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-sm rounded-lg shadow-md object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-pink-700 mb-3">{product.name}</h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Rs.{product.price.toFixed(2)}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < Math.round(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviews} Reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>

          {/* Extra Details */}
          <p className="text-sm text-gray-600 mb-6">{product.details}</p>

          {/* Info Badges */}
          <div className="space-y-1 text-gray-700 mb-8">
            <p> {product.stock}</p>
            <p> {product.shipping}</p>
            <p> {product.returns}</p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="bg-pink-400 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition w-fit"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
