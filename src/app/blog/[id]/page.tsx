'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import { Post } from '@/types/dashboard';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          if (!data.published) {
            router.push('/blog');
            return;
          }
          setPost(data);
        } else {
          router.push('/blog');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        router.push('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {post.image && (
            <div className="w-full overflow-hidden bg-gray-200 dark:bg-slate-700">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                >
                  <FiTag size={14} />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <FiCalendar />
                <time>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              {post.category && (
                <>
                  <span>•</span>
                  <span>{post.category}</span>
                </>
              )}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {post.description}
              </p>
              <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}
