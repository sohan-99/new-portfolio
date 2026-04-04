import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const updatedPost = await Post.findOneAndUpdate(
      { id: params.id, published: true },
      { $inc: { viewCount: 1 } },
      { new: true }
    ).lean();

    if (!updatedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ viewCount: updatedPost.viewCount ?? 0 });
  } catch (error) {
    console.error('Error incrementing post views:', error);
    return NextResponse.json(
      { error: 'Failed to increment post views' },
      { status: 500 }
    );
  }
}