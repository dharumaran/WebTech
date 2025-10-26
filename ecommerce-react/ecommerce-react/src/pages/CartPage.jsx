import React from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return <p className="text-center py-20 text-pink-600">Your cart is empty 💗</p>;
  }

  return (
    <div className="p-10 bg-pink-50 min-h-screen">
      <h2 className="text-3xl text-pink-700 font-bold mb-6 text-center">Your Cart</h2>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-lg font-semibold text-pink-700">{item.name}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)} × {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-pink-500 hover:text-pink-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl text-pink-700 font-semibold mb-4">
          Total: Rs.{getTotalPrice().toFixed(2)}
        </p>
        <button
          onClick={clearCart}
          className="bg-pink-300 hover:bg-pink-400 px-6 py-3 rounded transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartPage;
