import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-semibold text-pink-700 mb-8 text-center">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <h3 className="text-pink-700 font-medium">{item.name}</h3>
                <p className="text-gray-500">Rs.{item.price.toFixed(2)}</p>
              </div>
              <p className="text-pink-700 font-semibold">
                Qty: {item.quantity || 1}
              </p>
            </div>
          ))}

          <div className="mt-6 text-right text-pink-800 font-bold text-xl">
            Total: Rs.
            {cart
              .reduce(
                (acc, item) => acc + item.price * (item.quantity || 1),
                0
              )
              .toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
