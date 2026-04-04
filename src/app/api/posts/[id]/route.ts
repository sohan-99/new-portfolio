import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Post from '@/lib/models/Post';

// GET single post
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const shouldTrackView = searchParams.get('trackView') === '1';

    let post;

    if (shouldTrackView) {
      post = await Post.findOneAndUpdate(
        { id: params.id, published: true },
        { $inc: { viewCount: 1 } },
        { new: true }
      ).lean();
    } else {
      post = await Post.findOne({ id: params.id }).lean();
    }

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({
      ...post,
      viewCount: post.viewCount ?? 0,
      _id: post._id.toString(),
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

// PUT update post
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    await connectDB();

    const updatedPost = await Post.findOneAndUpdate(
      { id: params.id },
      {
        $set: {
          title: body.title,
          description: body.description,
          content: body.content,
          image: body.image,
          category: body.category,
          tags: body.tags,
          published: body.published,
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({
      ...updatedPost.toObject(),
      _id: updatedPost._id.toString(),
    });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE post
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const deletedPost = await Post.findOneAndDelete({ id: params.id });

    if (!deletedPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
