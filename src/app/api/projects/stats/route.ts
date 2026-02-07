import { NextResponse } from 'next/server';
import { DashboardProject } from '@/types/projects';
import { promises as fs } from 'fs';
import path from 'path';

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'dashboard-projects.json');

async function readProjects(): Promise<DashboardProject[]> {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const projects = await readProjects();
    
    const stats = {
      totalProjects: projects.length,
      featuredProjects: projects.filter(p => p.featured).length,
      fullstackProjects: projects.filter(p => p.category === 'fullstack').length,
      frontendProjects: projects.filter(p => p.category === 'frontend').length,
    };

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
