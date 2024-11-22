// projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  tags: string[];
  features?: string[];
  reflections?: string;
  githubUrl: string;
  technologiesUsed?: string[];
  duration?: string;
  challenges?: string;
  teamMembers?: string[];
  lessonsLearned?: string;
  role?: string;
  assignments?: {
    title: string;
    description: string;
  }[];
  pdfUrl?: string;
}
