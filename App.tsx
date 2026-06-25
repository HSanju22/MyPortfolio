
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Fix: Updated App component to include Stats and Clients sections for a complete portfolio view
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Clients />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
