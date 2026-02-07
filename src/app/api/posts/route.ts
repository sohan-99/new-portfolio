import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';

// GET all posts
export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({}).sort({ createdAt: -1 }).lean();
    
    // Convert _id to string for JSON serialization
    const postsData = posts.map(post => ({
      ...post,
      _id: post._id.toString(),
    }));
    
    return NextResponse.json(postsData);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST create new post
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    await connectDB();

    const newPost = await Post.create({
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      content: body.content,
      image: body.image || '',
      category: body.category || 'Uncategorized',
      tags: body.tags || [],
      published: body.published || false,
    });

    return NextResponse.json(
      {
        ...newPost.toObject(),
        _id: newPost._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
