import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h5 className="text-xl mb-4">Suivez-moi</h5>
          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/franck-fr%C3%A9ville-87039519b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-inherit"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <Linkedin className="h-6 w-6 md:h-7 md:w-7 relative transform transition duration-500 group-hover:scale-110 group-hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/frevillefranck"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-inherit"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <Github className="h-6 w-6 md:h-7 md:w-7 relative transform transition duration-500 group-hover:scale-110 group-hover:text-purple-400" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569739731832"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-inherit"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <Facebook className="h-6 w-6 md:h-7 md:w-7 relative transform transition duration-500 group-hover:scale-110 group-hover:text-indigo-400" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 space-y-2">
          <div>
            <a
              href="/legal"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block text-inherit no-underline"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-indigo-700">
                Mentions Légales
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <div>
            <small>
              © {currentYear} Franck Fréville. Tous droits réservés.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
