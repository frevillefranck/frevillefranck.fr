import React, { useState } from 'react';
import { Link } from 'react-scroll';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir le menu */}
      <div className="md:hidden fixed top-20 right-2 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:bg-blue-600 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu coulissant depuis la droite */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-black text-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white text-center cursor-pointer text-2xl"
          >
            Accueil
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white text-center cursor-pointer text-2xl"
          >
            À Propos
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white text-center cursor-pointer text-2xl"
          >
            Projets
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white text-center cursor-pointer text-2xl"
          >
            Compétences
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white text-center cursor-pointer text-2xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
