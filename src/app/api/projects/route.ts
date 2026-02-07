import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DashboardProject } from '@/types/projects';
import { promises as fs } from 'fs';
import path from 'path';

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'dashboard-projects.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read projects from file
async function readProjects(): Promise<DashboardProject[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write projects to file
async function writeProjects(projects: DashboardProject[]) {
  await ensureDataDir();
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
}

// GET all projects
export async function GET() {
  try {
    const projects = await readProjects();
    return NextResponse.json(projects);
  } catch (error) {
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
    const projects = await readProjects();

    const newProject: DashboardProject = {
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
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    projects.unshift(newProject);
    await writeProjects(projects);

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
