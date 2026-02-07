import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Project from '@/lib/models/Project';

// GET all projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    
    // Convert _id to string for JSON serialization
    const projectsData = projects.map(project => ({
      ...project,
      _id: project._id.toString(),
    }));
    
    return NextResponse.json(projectsData);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST create new project
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    await connectDB();

    const newProject = await Project.create({
      id: body.id || Date.now().toString(),
      title: body.title,
      description: body.description,
      longDescription: body.longDescription || '',
      image: body.image || '',
      gallery: body.gallery || [],
      techStack: body.techStack || [],
      category: body.category || 'frontend',
      github: body.github || '',
      liveUrl: body.liveUrl || '',
      featured: body.featured || false,
      date: body.date || new Date().toISOString().slice(0, 7),
    });

    return NextResponse.json(
      {
        ...newProject.toObject(),
        _id: newProject._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
