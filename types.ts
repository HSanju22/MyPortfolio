
export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
}

// Fix: Added missing interfaces for portfolio statistics and technology stack logos
export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface TechLogo {
  name: string;
  src: string;
}
