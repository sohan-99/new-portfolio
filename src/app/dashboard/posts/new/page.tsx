'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiSave, FiEye } from 'react-icons/fi';
import ImageSelector from '@/components/ImageSelector';

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    tags: '',
    image: '',
    published: false,
  });

  const handleSubmit = async (e: FormEvent, publish: boolean = false) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
          published: publish,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/dashboard/posts');
      } else {
        const errorMessage = data.details || data.error || 'Failed to create post';
        alert(errorMessage);
        console.error('Error response:', data);
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('An error occurred while creating the post');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create New Post
        </h1>

        <form className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              placeholder="Brief description"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              required
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-700 text-gray-900 dark:text-white font-mono text-sm"
              placeholder="Write your content here (supports markdown)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                placeholder="e.g., Tutorial, Blog"
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                placeholder="react, nextjs, typescript"
              />
            </div>
          </div>

          <ImageSelector
            value={formData.image}
            onChange={(url) => setFormData({ ...formData, image: url })}
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={(e) => handleSubmit(e, false)}
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              <FiSave /> Save as Draft
            </button>
            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors disabled:opacity-50"
            >
              <FiEye /> Publish
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
