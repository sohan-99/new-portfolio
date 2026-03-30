'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiFileText, FiSettings, FiLogOut, FiMenu, FiX, FiUser, FiImage, FiBriefcase } from 'react-icons/fi';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    { name: 'Posts', href: '/dashboard/posts', icon: FiFileText },
    { name: 'Projects', href: '/dashboard/manage-projects', icon: FiBriefcase },
    { name: 'Gallery', href: '/dashboard/gallery', icon: FiImage },
    { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
  ];

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] lg:w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Dashboard Header with Avatar */}
          <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                <FiUser size={20} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                Dashboard
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {session?.user?.name || 'Admin'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col pt-4 pb-4 overflow-y-auto">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`${
                      isActive
                        ? 'bg-primary/10 text-primary dark:bg-primary/20'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                  >
                    <item.icon
                      className={`${
                        isActive ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
                      } mr-3 flex-shrink-0 h-6 w-6`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* User Info & Logout */}
          <div className="flex-shrink-0 border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {session?.user?.email || 'admin'}
                </p>
                <Link 
                  href="/"
                  className="text-xs text-primary hover:text-primary-dark"
                >
                  ← Back to Site
                </Link>
              </div>
              <button
                onClick={handleSignOut}
                className="ml-3 p-2 rounded-md text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                title="Sign out"
              >
                <FiLogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1 pt-[60px] lg:pt-0">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
