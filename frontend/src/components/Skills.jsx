import React from 'react';
import { Code2, Globe, Database, Palette } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: Code2,
      technologies: ['React', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: Database,
      technologies: ['Strapi'],
    },
    {
      category: 'Design',
      icon: Palette,
      technologies: ['Figma', 'Responsive Design'],
    },
    {
      category: 'Autres',
      icon: Globe,
      technologies: ['Git', 'Déploiement et mise en ligne de sites web'],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Compétences</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-gray-50 p-6 rounded-lg">
              <skill.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-gray-600">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
