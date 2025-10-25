// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-4 text-center text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
      <p>&copy; {new Date().getFullYear()} Dharini Manimaran. All rights reserved.</p>
    </footer>
  );
};

export default Footer;