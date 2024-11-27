import React from 'react';
import { User, Coffee, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">À Propos</h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 mx-auto overflow-hidden rounded-full shadow-xl">
                  <img
                    src="/images/profile.png"
                    alt="Portrait du développeur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 ring-8 ring-indigo-600 rounded-2xl transform -rotate-6 -z-10"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Développeur Web Passionné
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Développeur web freelance, je me spécialise dans la création de
                sites web modernes et sur mesure. Fort de plusieurs projets
                réalisés en autonomie, j’utilise des outils performants comme
                React, Tailwind CSS et Strapi pour concevoir des sites intuitifs
                et adaptés aux besoins de mes clients. Mon approche se concentre
                sur la simplicité, l’efficacité et un design soigné pour offrir
                des solutions qui répondent à vos attentes.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors no-underline"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <User className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Passionné</h3>
              <p className="text-gray-600">
                Développeur web passionné par la création de sites modernes et
                intuitifs, alliant design soigné et performance pour répondre
                aux besoins de mes clients.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Dévoué</h3>
              <p className="text-gray-600">
                Engagement total envers la qualité et la satisfaction client.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Innovant</h3>
              <p className="text-gray-600">
                Toujours curieux et motivé à apprendre, je m'efforce de
                maîtriser des outils modernes et d'adopter les meilleures
                pratiques pour créer des solutions performantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
