
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">02 / Technical Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">Expertise & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {SKILLS.map((category) => (
            <div key={category.title} className="group">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 border-b border-black/10 pb-4 group-hover:border-black transition-colors duration-300">
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-lg font-light flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
