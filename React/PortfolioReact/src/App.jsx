// src/App.jsx

import React, { useState, useEffect } from 'react';
import Header from '.\components\Header';
import Footer from '.\components\Footer';
import Home from '.\pages\Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Utility for smooth scrolling to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Utility for theme toggle (simple implementation for light/dark mode)
const toggleTheme = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const App = () => {
  // Use state to manage the current active page
  const [currentPage, setCurrentPage] = useState('Home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to render the correct component based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'Education':
        return <Education />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Contact':
        return <Contact />;
      case 'Home':
      default:
        return <Home />;
    }
  };

  // Effect to handle scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to apply theme class
  useEffect(() => {
    toggleTheme(isDarkTheme);
  }, [isDarkTheme]);
  

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="container mx-auto p-4 py-8 min-h-[calc(100vh-120px)]">
        {renderPage()}
      </main>
      
      {/* Scroll to Top and Theme Toggle buttons - placed in App for fixed positioning */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
        {showScrollTop && (
          <button 
            id="scrollTopBtn" 
            title="Go to top" 
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition duration-300 text-xl"
          >
            &#8679;
          </button>
        )}
        <button 
          id="themeToggleBtn" 
          title="Toggle Theme" 
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-full shadow-lg transition duration-300 text-xl"
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default App;