import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';
import Counter from '@/lib/models/Counter';

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
    
    // Validate required fields
    if (!body.title || !body.description || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, and content are required' },
        { status: 400 }
      );
    }

    await connectDB();

    let newPost = null;

    // Generate a strictly increasing ID (1, 2, 3, ...).
    for (let attempt = 0; attempt < 5; attempt++) {
      const counter = await Counter.findByIdAndUpdate(
        'postId',
        { $inc: { seq: 1 } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );

      const nextId = String(counter?.seq ?? 1);

      try {
        newPost = await Post.create({
          id: nextId,
          title: body.title,
          description: body.description,
          content: body.content,
          image: body.image || '',
          category: body.category || 'Uncategorized',
          tags: body.tags || [],
          published: body.published || false,
        });
        break;
      } catch (error: any) {
        if (error?.code !== 11000) {
          throw error;
        }
      }
    }

    if (!newPost) {
      return NextResponse.json(
        { error: 'Failed to create a unique post ID' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ...newPost.toObject(),
        _id: newPost._id.toString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create post',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}
