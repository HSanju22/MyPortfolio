import React from 'react';
import { TECH_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-widest font-bold text-gray-400">My Stack</span>
          <h2 className="text-4xl font-bold tracking-tight mt-2">Preferred Technologies</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-100 border border-gray-100 reveal">
          {TECH_LOGOS.map((tech) => (
            <div key={tech.name} className="bg-white flex items-center justify-center p-6 sm:p-8 lg:p-10 group">
              <img 
                src={tech.src} 
                alt={tech.name} 
                className="h-8 sm:h-10 md:h-12 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
