
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
  image?: string;
  tags: string[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  detailsUrl?: string;
  status: 'published' | 'developing';
  sourceCodeUrl?: string;
}
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  color: 'blue' | 'indigo';
  iconType:String;
  delay: string;
}

