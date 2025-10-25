// src/pages/Education.jsx

import React from 'react';
import Card from 'PortfolioReact\src\components\Card.jsx';

const Education = () => {
  return (
    <section id="education">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Education</h2>
      <div className="max-w-3xl mx-auto">
        <Card>
          <h3 className="text-2xl font-semibold mb-2">Shiv Nadar University, Chennai</h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Degree:</strong> B.Tech in Computer Science (Internet of Things)
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            <strong>Duration:</strong> Aug 2023 – May 2027
          </p>
          <p className="text-lg font-medium mt-3 text-green-600 dark:text-green-400">
            <strong>CGPA:</strong> 7.91*
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Education;