// src/pages/Home.jsx

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

const Home = ({ setCurrentPage }) => {
  return (
    <section className="hero flex flex-col md:flex-row items-center justify-between p-8 min-h-[80vh]">
      
      {/* Hero Text */}
      <div className="hero-text max-w-xl mb-8 md:mb-0">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi There,<br/>I'm <span className="text-blue-600 dark:text-blue-400">Dharini</span>
        </h1>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
          I am into **Web Development, IoT & Machine Learning**.
        </p>
        
        {/* Button - Update to use React navigation logic */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage('Education'); }}
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          View Portfolio
        </a>

        {/* Social Icons */}
        <div className="social-icons mt-8 flex space-x-6 text-2xl">
          <a 
            href="https://www.linkedin.com/in/dharini-manimaran-a8589a2b2/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/dharumaran" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:dharinimanimaran2005@gmail.com" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="hero-img w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
        <img 
          src="portfolio.png" // IMPORTANT: Ensure this image file is in your 'public' folder
          alt="Dharini avatar or illustration" 
          className="w-full max-w-sm rounded-full shadow-2xl dark:shadow-blue-900/50"
        />
      </div>
    </section>
  );
};

export default Home;