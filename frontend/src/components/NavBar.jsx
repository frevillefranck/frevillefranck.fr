import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Code, Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-black text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Fréville Franck</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2 group  text-inherit no-underline"
              >
                <span className="relative z-10 hover:text-indigo-400 text-decoration-none no-underline transition-colors duration-200">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-x-0 bg-black transition-all duration-300 ease-in-out border-t border-gray-800 
            ${
              isOpen
                ? 'top-16 opacity-100 visible'
                : 'top-[-490px] opacity-0 invisible'
            }
          `}
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg relative group text-inherit no-underline"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 hover:text-indigo-400 transition-colors duration-200">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
