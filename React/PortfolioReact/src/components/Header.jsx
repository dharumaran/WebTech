// src/components/Header.jsx

import React from 'react';

const navItems = ['Home', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'];

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg transition-colors duration-300">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="logo text-2xl font-bold text-blue-600 dark:text-blue-400">
          Dharini
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent page reload
                setCurrentPage(item);
                scrollToTop(); // Scroll to top on navigation change
              }}
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200
                ${currentPage === item ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : ''}
              `}
            >
              {item}
            </a>
          ))}
        </nav>
        {/* Mobile menu button would go here */}
      </div>
    </header>
  );
};

export default Header;