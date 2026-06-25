
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">05 / Recognition</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">Certifications & Workshops</h3>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index} 
                  className="group flex justify-between items-center py-6 border-b border-black/10 last:border-0"
                >
                  <span className="text-lg md:text-xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                    {cert}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
