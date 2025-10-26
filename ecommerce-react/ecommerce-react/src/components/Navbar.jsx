import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  // Count total items in the cart, including quantity
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <nav className="bg-pink-200 p-4 flex justify-between items-center">
      {/* Brand */}
      <Link to="/" className="text-xl font-bold text-pink-700">
        HoneyPie
      </Link>

      {/* Navigation Links */}
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-pink-900">
          Home
        </Link>
        <Link to="/products" className="hover:text-pink-900">
          Products
        </Link>

        {/* Cart link with badge */}
        <Link to="/cart" className="relative hover:text-pink-900">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
