export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalViews?: number;
}
