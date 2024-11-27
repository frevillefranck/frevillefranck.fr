import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton quand on scrolle vers le bas
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-2 md:right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg transform transition-transform duration-500 hover:bg-indigo-700 focus:outline-none"
        >
          <span className="relative">
            <span className="absolute inset-0 bg-blue-600 blur-md rounded-full opacity-50 animate-ping"></span>
            <FaArrowUp className="text-sm md:text-lg" />
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
