import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, decreaseQuantity } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  // Calculate GST and delivery
  const gst = subtotal * 0.068;
  const deliveryCharge = subtotal < 499 && subtotal > 0 ? 50 : 0;
  const total = subtotal + gst + deliveryCharge;

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-semibold text-pink-700 mb-8 text-center">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h3 className="text-pink-700 font-medium">{item.name}</h3>
                <p className="text-gray-500">
                  Rs.{item.price.toFixed(2)} × {item.quantity || 1}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={item.quantity <= 1}
                  className={`p-1 border rounded ${
                    item.quantity > 1
                      ? "hover:bg-pink-100 text-gray-700"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <Minus size={16} />
                </button>

                <span className="px-2 font-semibold text-pink-700">
                  {item.quantity || 1}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="p-1 border rounded hover:bg-pink-100 text-gray-700"
                >
                  <Plus size={16} />
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-3 text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Summary Section */}
          <div className="mt-8 border-t pt-6 text-gray-700">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Subtotal</span>
              <span>Rs.{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">GST (6.8%)</span>
              <span>Rs.{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Delivery Charge</span>
              <span>
                {deliveryCharge === 0 ? "Free" : `Rs.${deliveryCharge.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between text-pink-700 text-lg font-semibold border-t pt-4 mt-4">
              <span>Total</span>
              <span>Rs.{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Clear Cart
            </button>
            <button
              className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
