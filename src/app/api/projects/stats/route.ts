import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/lib/models/Project';

export async function GET() {
  try {
    await connectDB();
    
    const totalProjects = await Project.countDocuments();
    const featuredProjects = await Project.countDocuments({ featured: true });
    const fullstackProjects = await Project.countDocuments({ category: 'fullstack' });
    const frontendProjects = await Project.countDocuments({ category: 'frontend' });
    
    const stats = {
      totalProjects,
      featuredProjects,
      fullstackProjects,
      frontendProjects,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching project stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
