// src/components/Card.jsx

import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;