'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiEye, FiEdit, FiBriefcase, FiStar, FiPlus, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import { DashboardSkeleton } from "@/components/ui/Skeleton";

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
      <DashboardSkeleton />
    );
  }

  const statsCards = [
    { title: 'Total Posts', value: stats.totalPosts, icon: FiFileText },
    { title: 'Published', value: stats.publishedPosts, icon: FiEye },
    { title: 'Drafts', value: stats.draftPosts, icon: FiEdit },
    { title: 'Total Views', value: stats.totalViews, icon: FiEye },
    { title: 'Total Projects', value: projectStats.totalProjects, icon: FiBriefcase },
    { title: 'Featured Projects', value: projectStats.featuredProjects, icon: FiStar },
  ];

  const quickActions = [
    { href: '/dashboard/posts/new', label: 'Create new post', icon: FiEdit },
    { href: '/dashboard/posts', label: 'Manage posts', icon: FiFileText },
    { href: '/dashboard/manage-projects/new', label: 'Add new project', icon: FiBriefcase },
    { href: '/dashboard/manage-projects', label: 'Manage projects', icon: FiStar },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-2">
            Overview
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white break-words">
            Welcome back, {session?.user?.name}
          </h1>
        </div>
        <Link href="/dashboard/posts/new" className="btn-primary w-full sm:w-auto !rounded-xl">
          <FiPlus className="w-4 h-4" />
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
            transition={{ delay: index * 0.07 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  {stat.title}
                </p>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary-400/10 border border-primary-400/20 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-primary-500 dark:text-primary-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Quick actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="card group flex items-center justify-between gap-3 p-4"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
                <action.icon className="h-5 w-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                {action.label}
              </span>
              <FiArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
