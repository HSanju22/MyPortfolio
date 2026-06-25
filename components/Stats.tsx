import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="py-16 md:py-20 px-6 md:px-12 bg-white reveal">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12">
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
