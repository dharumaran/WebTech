// src/pages/Contact.jsx

import React from 'react';
import Card from 'PortfolioReact\src\components\Card.jsx';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Contact</h2>
      <div className="max-w-md mx-auto">
        <Card className="text-center">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Let's connect! You can reach me via email or check out my profiles.
          </p>
          <div className="flex justify-center space-x-8 text-4xl mt-4">
            <a 
              href="mailto:dharinimanimaran2005@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Email"
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.linkedin.com/in/dharini-manimaran-a8589a2b2/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/dharumaran" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;