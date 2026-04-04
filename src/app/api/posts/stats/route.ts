import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';

export async function GET() {
  try {
    await connectDB();
    
    const totalPosts = await Post.countDocuments();
    const publishedPosts = await Post.countDocuments({ published: true });
    const draftPosts = await Post.countDocuments({ published: false });
    const viewsAggregate = await Post.aggregate([
      {
        $group: {
          _id: null,
          totalViews: {
            $sum: { $ifNull: ['$viewCount', 0] },
          },
        },
      },
    ]);
    
    const stats = {
      totalPosts,
      publishedPosts,
      draftPosts,
      totalViews: viewsAggregate[0]?.totalViews ?? 0,
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
