
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">04 / Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">What I Can Help You With</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
          {SERVICES.map((service) => (
            <div 
              key={service.title} 
              className="bg-white p-10 hover:bg-gray-50 transition-colors duration-300 flex flex-col gap-6 group"
            >
              <h4 className="text-xl font-bold tracking-tight transition-opacity duration-300 group-hover:opacity-60">{service.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
