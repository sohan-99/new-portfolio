import { NextResponse } from 'next/server';
import { Post } from '@/types/dashboard';
import { promises as fs } from 'fs';
import path from 'path';

const POSTS_FILE = path.join(process.cwd(), 'data', 'posts.json');

async function readPosts(): Promise<Post[]> {
  try {
    const data = await fs.readFile(POSTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const posts = await readPosts();
    
    const stats = {
      totalPosts: posts.length,
      publishedPosts: posts.filter(p => p.published).length,
      draftPosts: posts.filter(p => !p.published).length,
    };

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
