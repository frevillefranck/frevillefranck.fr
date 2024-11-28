import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Portfolio React',
      description: 'Un site portfolio créé avec React et Tailwind CSS.',
      image: '/images/portfolio.png',
      tags: ['React', 'Tailwind CSS'],
      url: 'https://frevillefranck.fr',
    },
    {
      title: "Un Monde Qui S'Illumine",
      description:
        "Un site catalogue d'objets personnalisables réalisé avec React, Tailwind CSS et Strapi.",
      image: '/images/unmondequisillumine.png',
      tags: ['React', 'Tailwind CSS', 'Strapi'],
      url: 'https://unmondequisillumine.fr',
    },
    {
      title: 'Sarah et la Pâtisserie',
      description:
        "Un site vitrine d'une pâtissière qui partage ses réalisatons. Réalisé avec React, Tailwin CSS et Strapi",
      image: '/images/sarahetlapatisserie.png',
      tags: ['React', 'Tailwind CSS', 'Strapi'],
      url: 'https://sarahetlapatisserie.fr',
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 h-[80px] line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Voir le projet <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projets Récents
        </h2>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <ProjectCard project={projects[currentIndex]} />

            <button
              onClick={previousProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white p-2 rounded-full shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6 text-indigo-600" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white p-2 rounded-full shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6 text-indigo-600" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
