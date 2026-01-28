
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  detailsUrl?: string;
}
