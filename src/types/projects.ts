export interface DashboardProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  techStack: string[];
  category: 'frontend' | 'fullstack';
  github?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectStats {
  totalProjects: number;
  featuredProjects: number;
  fullstackProjects: number;
  frontendProjects: number;
}
