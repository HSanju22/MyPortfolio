import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Left Content (Text) */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-1 mb-6 border border-black text-[10px] uppercase tracking-[0.2em] font-bold">
            Available for hire
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Computer Science & <br />
            Business Systems Engineer
          </h1>
          <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-12 font-light tracking-wide">
            Full Stack Developer | AI Enthusiast. Building scalable web applications, 
            intelligent AI solutions, and clean user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="px-8 sm:px-10 py-4 bg-black text-white text-xs uppercase tracking-widest font-bold border border-black hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 sm:px-10 py-4 bg-transparent text-black text-xs uppercase tracking-widest font-bold border border-black hover:bg-black hover:text-white transition-all duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content (Profile Photo) */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-black/5 shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}sanju_bran.jpg`} 
                alt="Sanjeev S H" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle decorative ring */}
            <div className="absolute -inset-4 border border-black/5 rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
