  import React from "react";
  import { useParams } from "react-router-dom";
  import { products } from "../mockProducts";

  function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
      <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="h-80 object-contain" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-pink-700 font-bold mb-4">Rs.{product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-pink-300 px-6 py-3 rounded hover:bg-pink-400">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  export default ProductDetail;
