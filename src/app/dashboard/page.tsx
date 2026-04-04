'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiEye, FiEdit, FiBriefcase, FiStar } from 'react-icons/fi';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
  });
  const [projectStats, setProjectStats] = useState({
    totalProjects: 0,
    featuredProjects: 0,
    fullstackProjects: 0,
    frontendProjects: 0,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const [postsRes, projectsRes] = await Promise.all([
          fetch('/api/posts/stats'),
          fetch('/api/projects/stats'),
        ]);
        
        if (postsRes.ok) {
          const data = await postsRes.json();
          setStats(data);
        }
        
        if (projectsRes.ok) {
          const data = await projectsRes.json();
          setProjectStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: FiFileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Published',
      value: stats.publishedPosts,
      icon: FiEye,
      color: 'bg-green-500',
    },
    {
      title: 'Drafts',
      value: stats.draftPosts,
      icon: FiEdit,
      color: 'bg-yellow-500',
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      icon: FiEye,
      color: 'bg-cyan-500',
    },
    {
      title: 'Total Projects',
      value: projectStats.totalProjects,
      icon: FiBriefcase,
      color: 'bg-purple-500',
    },
    {
      title: 'Featured Projects',
      value: projectStats.featuredProjects,
      icon: FiStar,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white break-words">
          Welcome back, {session?.user?.name}!
        </h1>
        <Link
          href="/dashboard/posts/new"
          className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors w-full sm:w-auto"
        >
          New Post
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/dashboard/posts/new"
            className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary dark:hover:border-primary transition-colors text-center"
          >
            <FiEdit className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Create New Post
            </p>
          </Link>
          <Link
            href="/dashboard/posts"
            className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary dark:hover:border-primary transition-colors text-center"
          >
            <FiFileText className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Manage Posts
            </p>
          </Link>
          <Link
            href="/dashboard/manage-projects/new"
            className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary dark:hover:border-primary transition-colors text-center"
          >
            <FiBriefcase className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Add New Project
            </p>
          </Link>
          <Link
            href="/dashboard/manage-projects"
            className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary dark:hover:border-primary transition-colors text-center"
          >
            <FiStar className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Manage Projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
