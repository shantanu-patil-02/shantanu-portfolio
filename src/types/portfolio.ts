export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  technicalDecisions: string[];
  mockupUrl: string;
  imageSrc: string;
  githubUrl: string;
  liveUrl?: string;
  status: 'Implemented' | 'In Progress' | 'Prototype';
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  summary: string;
  details: string;
}

export interface AchievementItem {
  title: string;
  stage: string;
  description: string;
  category: 'Hackathon' | 'Competition' | 'Leadership';
  badge?: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  department: string;
  focusAreas: string[];
}
