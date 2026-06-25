import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">01 / About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">
            Merging Business <br /> & Technology.
          </h3>
        </div>
        
        <div className="md:col-span-8 space-y-12">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
            I am a detail-oriented Computer Science and Business Systems undergraduate with strong skills in 
            full stack development, AI engineering, DevOps, and UI/UX design. Passionate about building innovative, 
            scalable, and sustainable digital solutions. A fast learner and collaborative team player with 
            hands-on experience in Generative AI and Agentic AI systems.
          </p>
          
          <div className="pt-12 border-t border-black/10">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Education</h4>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-lg font-bold">Bachelor of Engineering</p>
                <p className="text-gray-500">Computer Science & Business Systems</p>
                <p className="text-gray-400 text-sm mt-1 italic">Dr. Ambedkar Institute of Technology, Bengaluru</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-2xl font-bold">8.95 CGPA</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Class of 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
