import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import { Cpu, Layers, GitBranch, ArrowRight, X } from 'lucide-react';

const VORTEX_TECH = [
  'Java 21',
  'ByteBuddy',
  'TCP Sockets',
  'Jackson',
  'Virtual Threads',
  'JVM Internals'
];

const VORTEX_HIGHLIGHTS = [
  'Built a custom Java runtime orchestration framework using bytecode interception and distributed execution.',
  'Implemented annotation-driven method interception inspired by Spring AOP and @Transactional internals.',
  'Designed a three-tier distributed architecture: Client → Orchestrator → Worker.',
  'Developed round-robin load balancing and heartbeat-based fault detection system.',
  'Built custom TCP framing protocol and distributed serialization engine using Jackson JSON.',
  'Integrated Java Instrumentation API for class-load-time bytecode enhancement.',
  'Replaced JDK Dynamic Proxy with ByteBuddy subclass generation to support concrete class interception.',
  'Implemented retry and worker recovery mechanisms for resilient distributed execution.'
];

const PHASES = [
  {
    phase: "Phase 1",
    title: "Interception Engine",
    items: ["@Distributed annotation", "InvocationHandler interception", "Dynamic proxy system"]
  },
  {
    phase: "Phase 2",
    title: "Serialization Layer",
    items: ["ExecutionPacket structure", "ExecutionResult container", "Jackson serialization"]
  },
  {
    phase: "Phase 3",
    title: "Network Runtime",
    items: ["TCP framing protocol", "Virtual thread workers", "Cross-JVM execution flow"]
  },
  {
    phase: "Phase 4",
    title: "Distributed Orchestration",
    items: ["Node registry tracking", "Round-robin load balancing", "Orchestrator routing logic"]
  },
  {
    phase: "Phase 5",
    title: "Fault Tolerance",
    items: ["Heartbeat monitoring", "Dead node detection", "Automatic retries & failover"]
  },
  {
    phase: "Phase 6",
    title: "Advanced Runtime",
    items: ["ByteBuddy subclass generation", "Java Instrumentation Agent", "Runtime class loading"]
  }
];

const Projects: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const openCaseStudy = (projectName: string) => {
    setActiveCaseStudy(projectName);
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden transition-all duration-300">
      {/* Subtle Grid Overlay Background to feel highly technical & premium */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Decorative Radial Shadows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-3 block">
            03 / Selected Works
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Impactful Projects
          </h3>
          <p className="text-sm md:text-base text-zinc-400 mt-4 max-w-xl font-light leading-relaxed">
            A curated showcase of distributed architecture, custom virtual runtimes, and low-level systems engineering.
          </p>
        </div>

        {/* Unified Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* FLAGSHIP PROJECT 01: Vortex-VM */}
          <div 
            className="group relative border border-zinc-900 bg-zinc-950/30 p-8 sm:p-10 hover:border-zinc-800 hover:bg-zinc-950/50 hover:shadow-[0_15px_40px_rgba(255,255,255,0.02)] transition-all duration-500 flex flex-col justify-between aspect-auto min-h-[360px] rounded-2xl overflow-hidden"
          >
            {/* Subtle top silver-gradient highlight on hover for flagship feel */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent group-hover:via-zinc-100/20 transition-all duration-700" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-widest font-semibold select-none">
                  PROJECT 01
                </span>
                <span className="text-[9px] font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-800/80 px-2.5 py-0.5 rounded select-none uppercase tracking-wider">
                  DISTRIBUTED JVM RUNTIME
                </span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-100">
                Vortex-VM: Distributed Bytecode Orchestrator
              </h4>
              
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
                Custom distributed Java runtime framework enabling remote JVM method execution through bytecode interception, orchestration, and fault-tolerant distributed systems architecture.
              </p>
            </div>
            
            <div className="mt-auto">
              {/* Standardized Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {VORTEX_TECH.map((t) => (
                  <span 
                    key={t} 
                    className="text-[9px] font-mono text-zinc-300 bg-zinc-900/50 border border-zinc-800/80 px-2.5 py-1 rounded select-none"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div className="overflow-hidden border-t border-zinc-900/60 pt-4 flex items-center justify-between">
                <button 
                  onClick={() => openCaseStudy('Vortex-VM')}
                  className="flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-300 cursor-pointer text-left bg-transparent border-none text-white focus:outline-none"
                >
                  <span className="text-[11px] uppercase font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors cursor-pointer">
                    VIEW CASE STUDY &rarr;
                  </span>
                </button>
                
                {/* Clean Github anchor linking */}
                <a 
                  href={SOCIAL_LINKS.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 rounded-lg border border-zinc-900 hover:border-zinc-800 bg-zinc-900/20 text-zinc-500 hover:text-white transition-all duration-300"
                  aria-label="View source repository on Github"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* OTHER PROJECTS MAPPED */}
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title} 
              className="group relative border border-zinc-900 bg-zinc-950/30 p-8 sm:p-10 hover:border-zinc-800 hover:bg-zinc-950/50 hover:shadow-[0_15px_40px_rgba(255,255,255,0.02)] transition-all duration-500 flex flex-col justify-between aspect-auto min-h-[360px] rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900/50 to-transparent group-hover:via-zinc-700/40 transition-all duration-700" />

              <div>
                <span className="text-[10px] font-mono text-zinc-500 mb-6 block uppercase tracking-widest font-semibold select-none">
                  Project 0{index + 2}
                </span>
                
                <h4 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-100">
                  {project.title}
                </h4>
                
                <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-800/80 px-2.5 py-1 rounded select-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Row */}
                <div className="overflow-hidden border-t border-zinc-900/60 pt-4 flex items-center justify-between">
                  <button 
                    onClick={() => openCaseStudy(project.title)}
                    className="flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-300 cursor-pointer text-left bg-transparent border-none text-white focus:outline-none"
                  >
                    <span className="text-[11px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-white transition-colors cursor-pointer">
                      VIEW CASE STUDY &rarr;
                    </span>
                  </button>
                  
                  <a 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1.5 rounded-lg border border-zinc-900 hover:border-zinc-800 bg-zinc-900/20 text-zinc-500 hover:text-white transition-all duration-300"
                    aria-label="View source repository on Github"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant, Full-Screen Modal Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={closeCaseStudy}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 text-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeCaseStudy}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {activeCaseStudy === 'Vortex-VM' ? (
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded bg-zinc-900 select-none uppercase">
                      DISTRIBUTED JVM RUNTIME
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-4 mb-2">
                      Vortex-VM: Distributed Bytecode Orchestrator
                    </h4>
                    <p className="text-xs sm:text-sm font-light text-zinc-400 max-w-2xl leading-relaxed">
                      Custom distributed Java runtime framework enabling remote JVM method execution through bytecode interception, orchestration, and fault-tolerant distributed systems architecture.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-zinc-900 pt-6">
                    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-zinc-400" /> Key Engineering Highlights
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {VORTEX_HIGHLIGHTS.map((hl, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-zinc-400 leading-relaxed">
                          <span className="text-white font-mono font-bold select-none">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Overview */}
                  <div className="border-t border-zinc-900 pt-6">
                    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-zinc-400" /> Architecture Overview
                    </h5>
                    
                    {/* Simplified Technical Visual Flow */}
                    <div className="grid grid-cols-5 items-center gap-2 text-center bg-zinc-900/20 p-4 border border-zinc-900 rounded-lg max-w-xl mx-auto mb-6">
                      <div className="p-2 border border-zinc-800 bg-zinc-950/80 rounded">
                        <p className="text-[10px] font-semibold text-white">Client</p>
                        <p className="text-[8px] text-zinc-500 font-mono">Proxy Class</p>
                      </div>
                      <div className="text-zinc-600 text-xs font-mono select-none">&rarr;</div>
                      <div className="p-2 border border-zinc-700 bg-zinc-900/60 rounded">
                        <p className="text-[10px] font-semibold text-white">Orchestrator</p>
                        <p className="text-[8px] text-zinc-500 font-mono">Load Balancer</p>
                      </div>
                      <div className="text-zinc-600 text-xs font-mono select-none">&rarr;</div>
                      <div className="p-2 border border-zinc-800 bg-zinc-950/80 rounded">
                        <p className="text-[10px] font-semibold text-white">Worker Node</p>
                        <p className="text-[8px] text-zinc-500 font-mono">Virtual Threads</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <p className="text-[11px] font-bold uppercase text-zinc-300 tracking-wide font-mono">Distributed Execution Concept</p>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Dynamic Class-Proxying intercepts JVM instructions, wrapping parameters into packet streams. Standard method routes bypass standard local execution environments and execute transparently over target nodes.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[11px] font-bold uppercase text-zinc-300 tracking-wide font-mono">Fault Tolerance Strategy</p>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Continuous high-frequency heartbeats track the node registry. If socket timeouts persist, the scheduler redirects bytecode execution payloads to alternative pools instantly using an intelligent backoff retries engine.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="border-t border-zinc-900 pt-6 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                    {['Java 21', 'ByteBuddy', 'Java Instrumentation API', 'TCP Sockets', 'Jackson', 'Virtual Threads', 'Maven', 'Distributed Systems', 'Reflection API', 'JVM Internals'].map((ts) => (
                      <span key={ts} className="text-[9px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800/80 px-2.5 py-1 rounded">
                        {ts}
                      </span>
                    ))}
                  </div>
                  
                  {/* Milestones / Phases condensed */}
                  <div className="border-t border-zinc-900 pt-6">
                    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-zinc-400" /> Phased Engineering Timeline
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {PHASES.map((ph, idx) => (
                        <div key={idx} className="border border-zinc-900 bg-zinc-950/30 p-3 rounded hover:border-zinc-800 transition-colors">
                          <span className="text-[8px] font-mono text-zinc-500 block">{ph.phase}</span>
                          <span className="text-[10px] font-bold text-zinc-300 font-mono">{ph.title}</span>
                          <ul className="mt-1 space-y-0.5 text-[9px] text-zinc-500 font-light">
                            {ph.items.map((it, i) => (
                              <li key={i}>&bull; {it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Dynamic modal for other projects */
                <div className="space-y-6">
                  {/* Fetch info from mapped project card */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded bg-zinc-900 select-none uppercase">
                      Selected Case Study
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-4 mb-2">
                      {activeCaseStudy}
                    </h4>
                    <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
                      {PROJECTS.find(p => p.title === activeCaseStudy)?.description}
                    </p>
                  </div>

                  <div className="border-t border-zinc-900 pt-6">
                    <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-400 mb-4 font-mono">
                      Technology Pipeline
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {PROJECTS.find(p => p.title === activeCaseStudy)?.tech.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-zinc-900 pt-6 space-y-4">
                    <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-400 font-mono">
                      Architectural Overview & Highlights
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      This production system integrates robust development architectures with modern state patterns. Designed with performance optimization, responsive layouts, data models, and scalable security policies, it delivers efficient query response times and seamless synchronizations.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400 font-light">
                      <li className="flex gap-2 items-start">
                        <span className="text-white font-mono font-bold select-none">•</span>
                        <span>Designed clean data schemas with efficient indexing and transaction handlers.</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="text-white font-mono font-bold select-none">•</span>
                        <span>Configured modular components adhering to strict separation of concerns principles.</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="text-white font-mono font-bold select-none">•</span>
                        <span>Implemented interactive visual indicators using fluid motion animations.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
