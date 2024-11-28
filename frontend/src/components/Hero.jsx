import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./images/hero.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
          Développeur Web Freelance
        </h1>
        <p className="text-xl lg:text-2xl mb-12 max-w-2xl mx-auto text-gray-200">
          Je vous accompagne dans la création de sites web modernes et
          performants, adaptés à vos besoins."
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block no-underline"
        >
          Démarrons un projet
        </a>
        <div className="mt-16 animate-bounce text-white">
          <ArrowDown className="mx-auto h-8 w-8" />
        </div>
      </div>
    </section>
  );
}
