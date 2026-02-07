import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';

export async function GET() {
  try {
    await connectDB();
    
    const totalPosts = await Post.countDocuments();
    const publishedPosts = await Post.countDocuments({ published: true });
    const draftPosts = await Post.countDocuments({ published: false });
    
    const stats = {
      totalPosts,
      publishedPosts,
      draftPosts,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching post stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
