
import { Project, SkillCategory, Service, Stat, TechLogo } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML/CSS', 'React.js', 'Node.js','Spring Boot', 'Next.js', 'REST APIs', 'Figma'],
  },
  {
    title: 'Cloude and DevOps',
    skills: ['AWS (IAM, EC2, S3)', 'CI/CD fundamentals', 'Docker', 'Jenkins', 'Kubernetes', 'Git & GitHub'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Design', 'AI / Machine Learning'],
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Problem Solving', 'Leadership', 'Hard Working and Quick Learner'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Online Library Management System',
    description: 'Automated book borrowing and inventory management with real-time tracking.',
    tech: ['Node.js', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'AI-Powered Healthcare Assistant',
    description: 'Health prediction using sophisticated machine learning models for early diagnosis.',
    tech: ['Python', 'Django', 'React.js', 'MongoDB', 'Machine Learning'],
  },
  {
    title: 'Agentic AI Ticketing System',
    description: 'Autonomous ticket classification using LLM-powered agents for optimized support.',
    tech: ['JavaScript', 'Node.js', 'React.js', 'LangChain', 'MongoDB'],
  },
  {
    title: 'Cloud File Sharing Application',
    description: 'Secure enterprise-grade file sharing with JWT authentication and AWS storage.',
    tech: ['Java','Spring Boot', 'React.js', 'AWS S3', 'JWT'],
  },
];

export const SERVICES: Service[] = [
  { title: 'Full Stack Web Development', description: 'Building end-to-end responsive web applications.' },
  { title: 'AI & Machine Learning Solutions', description: 'Developing intelligent systems and predictive models.' },
  { title: 'REST API Development', description: 'Crafting robust and scalable server-side architectures.' },
  { title: 'UI/UX Design (Figma)', description: 'Designing user-centric interfaces with modern aesthetics.' },
  { title: 'Backend Development', description: 'Specializing in secure and efficient Backend development.' },
  { title: 'Cloud Application Development', description: 'Deploying and managing scalable cloud-based solutions.' },
];

export const CERTIFICATIONS = [
  'Full Stack Developer Professional Certificate (MERN Stack)',
  'AWS Cloud Essentials',
  'UX Design & Project Management (IBM)',
  'Generative AI Application Development Workshop',
  'Data Analytics Workshop',
  'Model Context Protocol (MCP) Workshop',
];

export const SOCIAL_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/sanjush898/',
  github: 'https://github.com/HSanju22',
  leetcode: 'https://leetcode.com/HSanju22',
  email: 'mailto:shsanjeev321@gmail.com',
  x: 'https://x.com/SanjuSanje86175',
};

// Fix: Added missing STATS data for the Stats component
export const STATS: Stat[] = [
  { label: 'CGPA', value: '8.95', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
  { label: 'Projects', value: '10+', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V20a2 2 0 002 2h14a2 2 0 002-2v-6.745z M16 8V5a2 2 0 00-2-2H10a2 2 0 00-2 2v3H4a2 2 0 00-2 2v3h18v-3a2 2 0 00-2-2h-4zM10 8V5h4v3h-4z' },
  { label: 'Technical Experience', value: '2+ Yrs', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Certifications', value: '6+', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
];

// Fix: Added missing TECH_LOGOS data for the Clients component
export const TECH_LOGOS: TechLogo[] = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Jenkins', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];
