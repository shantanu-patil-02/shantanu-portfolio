import {
  Project,
  SkillCategory,
  ApproachStep,
  AchievementItem,
  EducationInfo,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Shantanu Patil',
  monogram: 'SP',
  role: 'Full-Stack Developer in the Making',
  heroHeadline: {
    line1: 'Ideas into',
    line2: 'scalable products.',
  },
  supportingCopy:
    'I’m Shantanu Patil, a full-stack developer in the making, building web experiences with React, Node.js, MongoDB, and Java—while exploring the possibilities of applied AI.',
  availability: 'Open to software engineering internships and early-career opportunities',
  quote: {
    line1: '— Better systems.',
    line2: 'Better experiences.',
    line3: 'A more connected tomorrow.',
    subtext: 'ARCHITECTURAL LOGIC & HUMAN CENTRIC DESIGN',
  },
  aboutHeadline: 'Building with logic. Designing with intention.',
  aboutIntroduction:
    'I’m Shantanu Patil, a Computer Science student at MGM University with a growing focus on full-stack development and software engineering. I enjoy turning ideas into usable digital products—from designing intuitive interfaces to building the backend systems and databases that power them.\n\nMy approach combines structured problem-solving with an interest in thoughtful visual design. I’m developing my skills across the MERN stack, Java, data structures and algorithms, and AI/ML, with the goal of building software that is both technically sound and genuinely useful.',
  philosophy:
    'I believe good software is more than working code. It should solve a clear problem, be easy to understand, and feel considered in the details. I’m working toward becoming an engineer who can move comfortably between the interface, the underlying system, and the problem a product is meant to solve.',
  contactHeadline: 'Have a worthwhile problem to solve?',
  contactSupporting:
    'I’m interested in connecting with developers, teams, and opportunities where I can contribute, learn, and build useful software.',
  location: 'Pune / Chhatrapati Sambhajinagar, India',
  email: 'shantanupatil636@gmail.com',
  github: 'https://github.com/shantanu-patil-02',
  githubUsername: 'shantanu-patil-02',
  linkedin: 'https://www.linkedin.com/in/shantanu-sanjay-patil/',
  resumeFileName: 'Shantanu_Patil_Resume.pdf',
  // Web3Forms integration for direct inbox delivery to shantanupatil636@gmail.com
  web3formsAccessKey: '9b347930-0504-4650-b078-be2f48bacf77',
  formspreeEndpoint: '',
};

export const WHAT_IM_FOCUSED_ON = [
  {
    title: 'Full-Stack Engineering',
    description: 'Building web applications using React, Node.js, Express, and MongoDB.',
  },
  {
    title: 'Problem Solving',
    description: 'Practising data structures and algorithms in Java and strengthening my understanding of core computer science concepts.',
  },
  {
    title: 'Applied AI',
    description: 'Exploring AI/ML and integrating AI APIs into practical applications where they add real value.',
  },
  {
    title: 'Product Thinking',
    description: 'Understanding how interface design, backend architecture, data, and user needs fit together to create a complete product.',
  },
];

export const EDUCATION: EducationInfo = {
  institution: 'MGM University',
  degree: 'B.Tech (Integrated)',
  department: 'Computer Science',
  focusAreas: [
    'Full-stack development',
    'Programming fundamentals & OOP',
    'Data Structures & Algorithms',
    'Applied AI/ML & Emerging Technologies',
  ],
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Smart India Hackathon (SIH)',
    stage: 'College Finalist',
    description:
      'Participated in the college-level selection/finalist stage with a blockchain-based fake-document detection concept.',
    category: 'Hackathon',
    badge: 'College Finalist',
  },
  {
    title: 'Codethon Programming Contest',
    stage: 'Top 10 / Round 2',
    description:
      'Reached the competitive Round 2 / Top 10 stage through timed problem-solving rounds.',
    category: 'Competition',
    badge: 'Top 10 / Round 2',
  },
  {
    title: 'Cyber Student Club',
    stage: 'Team Head',
    description:
      'Served as Team Head, organising peer learning sessions, technical discussions, and student technology initiatives.',
    category: 'Leadership',
    badge: 'Team Head',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand the problem',
    summary: 'Identify what the user needs and what the application should accomplish.',
    details:
      'Before writing code or choosing libraries, I clarify the core purpose: who is using the software, what bottleneck it removes, and what constraints exist.',
  },
  {
    number: '02',
    title: 'Structure the solution',
    summary: 'Break the problem into interface, backend, data, and workflow decisions.',
    details:
      'I outline the data model in MongoDB, map REST endpoints, and sketch the component hierarchy to ensure a clear boundary between state and presentation.',
  },
  {
    number: '03',
    title: 'Build and validate',
    summary: 'Implement the functionality, test important flows, and fix issues.',
    details:
      'I write clean, modular React components and Express routes, verifying CRUD flows, error states, and responsive edge cases step by step.',
  },
  {
    number: '04',
    title: 'Refine the experience',
    summary: 'Improve clarity, usability, responsiveness, and visual consistency.',
    details:
      'I polish typography, spacing, contrast, loading feedback, and micro-interactions so the finished product feels intentional and effortless to use.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Interface architecture & client state',
    skills: ['HTML, CSS, JavaScript', 'React', 'Responsive interface development', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Server logic & API design',
    skills: ['Node.js', 'Express.js', 'REST API development', 'Authentication workflows'],
  },
  {
    title: 'Data',
    description: 'Persistence & schema modeling',
    skills: ['MongoDB', 'Database modelling', 'CRUD workflows', 'Data indexing basics'],
  },
  {
    title: 'Programming & CS',
    description: 'Core computational fundamentals',
    skills: ['Java', 'Data Structures and Algorithms', 'Object-Oriented Programming', 'Core CS fundamentals'],
  },
  {
    title: 'AI & Emerging Tech',
    description: 'Applied intelligent capabilities',
    skills: ['AI API integration', 'Exploring AI/ML concepts', 'Blockchain application development', 'Smart contract basics'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'prime-properties',
    number: '01',
    title: 'Prime Properties',
    subtitle: 'REAL ESTATE PLATFORM',
    category: 'Full-Stack Web Application',
    description:
      'A real-estate website concept designed to present property listings and make customer inquiries easier to manage. The project focuses on property discovery, listing administration, and an inquiry workflow.',
    problem:
      'Property hunters frequently encounter cluttered, slow listing portals, while property managers struggle to keep inventory, pricing, and client inquiries synchronized in one place.',
    contribution:
      'Designed and engineered the full-stack architecture: created the responsive React interface, established MongoDB schemas for listings, built RESTful endpoints in Express, and implemented the inquiry form submission workflow.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    technicalDecisions: [
      'Structured MongoDB schemas to support flexible listing types (Sale, Rent, Lease) with localized query filtering.',
      'Separated listing presentation into reusable components with client-side state management for fast browsing.',
    ],
    mockupUrl: 'primeproperties.in',
    imageSrc: '/assets/extracted/mockup-prime.png',
    githubUrl: 'https://github.com/shantanu-patil-02/prime-properties',
    liveUrl: 'https://primeproperties.demo.app',
    status: 'Implemented',
    featured: true,
  },
  {
    id: 'student-portal',
    number: '02',
    title: 'Student Portal',
    subtitle: 'STUDENT TASK MANAGER',
    category: 'Student Productivity',
    description:
      'A student-focused application for organising tasks and managing academic work through a structured interface.',
    problem:
      'Students juggle assignments, deadlines, and project milestones across multiple disconnected tools, leading to missed deadlines and poor visibility into task completion.',
    contribution:
      'Developed the task management application using the MERN stack: built the interactive task dashboard, implemented CRUD operations (create, view, edit, delete tasks), and added task progress tracking.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    technicalDecisions: [
      'Engineered an intuitive dashboard layout allowing quick status transitions (Active, Completed) without full page reloads.',
      'Designed a clean RESTful task API with input validation to prevent invalid date and status payloads.',
    ],
    mockupUrl: 'dashboard.studentportal.edu',
    imageSrc: '/assets/extracted/mockup-student.png',
    githubUrl: 'https://github.com/shantanu-patil-02/student-portal',
    liveUrl: 'https://studentportal.demo.app',
    status: 'Implemented',
    featured: true,
  },
  {
    id: 'certificate-verification',
    number: '03',
    title: 'Certificate Verification',
    subtitle: 'BLOCKCHAIN PROJECT',
    category: 'Blockchain Application',
    description:
      'A blockchain-based certificate verification project exploring how document authenticity can be checked using cryptographic hashes and on-chain records.',
    problem:
      'Physical paper certificates and easily altered digital PDFs are vulnerable to counterfeit claims, requiring slow manual verification by institutions.',
    contribution:
      'Implemented the cryptographic verification workflow: connected a React/Vite frontend with Ethereum tooling using ethers.js, built hash verification lookup, and established the admin certificate registration workflow.',
    technologies: ['React', 'Vite', 'Solidity', 'ethers.js', 'Ganache'],
    technicalDecisions: [
      'Stored only the SHA-256 document hash on-chain rather than student personal data, guaranteeing tamper-proof verification while respecting privacy.',
      'Constructed clear status feedback distinguishing valid certificates, unregistered hashes, and network errors.',
    ],
    mockupUrl: 'verify.blockchain.io',
    imageSrc: '/assets/extracted/mockup-cert.png',
    githubUrl: 'https://github.com/shantanu-patil-02/certificate-verification',
    liveUrl: 'https://verify-certificate.demo.app',
    status: 'Implemented',
    featured: true,
  },
  {
    id: 'farmpro',
    number: '04',
    title: 'FarmPro',
    subtitle: 'AGRICULTURAL WORKFLOWS',
    category: 'Agricultural Web Application',
    description:
      'A data-driven web application concept focused on agricultural workflows and presenting useful information through a web interface.',
    problem:
      'Farm operators and agricultural teams often lack clear, centralized web dashboards to track crop records, resource allocation, and seasonal field tasks.',
    contribution:
      'Designed the interface layout and data-presentation structures for crop management, field status logging, and operational overview displays.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    technicalDecisions: [
      'Organized agricultural data into concise modular cards to present seasonal schedules and resource requirements clearly.',
      'Maintained a lightweight, clean data architecture focused on usability rather than unnecessary complexity.',
    ],
    mockupUrl: 'farmpro.app',
    imageSrc: '/assets/extracted/mockup-prime.png',
    githubUrl: 'https://github.com/shantanu-patil-02/farmpro',
    liveUrl: 'https://farmpro.demo.app',
    status: 'Prototype',
    featured: true,
  },
];
