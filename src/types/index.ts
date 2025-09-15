export interface SkillItem {
  icon: string;
  name: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ThemeColor {
  start: string;
  end: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
  year?: string;
}