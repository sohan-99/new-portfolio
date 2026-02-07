import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';
import Project from '@/lib/models/Project';

export async function GET() {
  try {
    await connectDB();
    
    // Count documents
    const postsCount = await Post.countDocuments();
    const projectsCount = await Project.countDocuments();
    const publishedPosts = await Post.countDocuments({ published: true });
    const featuredProjects = await Project.countDocuments({ featured: true });
    
    // Get latest entries
    const latestPost = await Post.findOne().sort({ createdAt: -1 }).lean();
    const latestProject = await Project.findOne().sort({ createdAt: -1 }).lean();
    
    return NextResponse.json({
      status: '✅ MongoDB Connected Successfully!',
      timestamp: new Date().toISOString(),
      database: {
        type: 'MongoDB Atlas',
        status: 'Active',
      },
      statistics: {
        posts: {
          total: postsCount,
          published: publishedPosts,
          draft: postsCount - publishedPosts,
        },
        projects: {
          total: projectsCount,
          featured: featuredProjects,
        },
      },
      latestData: {
        latestPost: latestPost ? {
          title: latestPost.title,
          category: latestPost.category,
          published: latestPost.published,
          createdAt: latestPost.createdAt,
        } : null,
        latestProject: latestProject ? {
          title: latestProject.title,
          category: latestProject.category,
          featured: latestProject.featured,
          createdAt: latestProject.createdAt,
        } : null,
      },
      message: '🎉 Your data is stored in MongoDB Atlas Cloud Database!',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: '❌ Error',
        error: error.message,
        message: 'Failed to connect to MongoDB',
      },
      { status: 500 }
    );
  }
}
