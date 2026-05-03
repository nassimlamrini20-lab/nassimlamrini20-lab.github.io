export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  tools: string[];
  results: string;
  impact: string;
  category: 'Industrial' | 'Research' | 'Software';
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  type: 'Journal' | 'Conference';
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  narrative: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
