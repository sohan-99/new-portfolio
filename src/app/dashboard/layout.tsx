'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiFileText, FiSettings, FiLogOut, FiMenu, FiX, FiImage, FiBriefcase } from 'react-icons/fi';
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

  const initial = (session?.user?.name || session?.user?.email || 'A').charAt(0).toUpperCase();

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-mesh opacity-60" />

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-4 h-14 flex items-center justify-between">
        <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
          sohanur<span className="text-primary-400">.dev</span>
        </span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900/5 dark:hover:bg-white/10"
        >
          {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] lg:w-64 bg-white dark:bg-slate-900 lg:bg-white/60 lg:dark:bg-white/[0.02] backdrop-blur-xl border-r border-slate-200 dark:border-white/10 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="px-5 h-16 flex items-center border-b border-slate-200 dark:border-white/10">
            <Link href="/dashboard" className="font-display font-bold text-xl text-slate-900 dark:text-white">
              sohanur<span className="text-primary-400">.dev</span>
              <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">admin</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive =
                item.href === '/dashboard' ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-primary-400/10 text-primary-600 dark:text-primary-300 ring-1 ring-inset ring-primary-400/20'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5'
                  }`}
                >
                  <item.icon className="h-[18px] w-[18px] flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User & logout */}
          <div className="p-3 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3 rounded-xl p-2">
              <div className="w-9 h-9 shrink-0 rounded-full bg-primary-400 text-slate-950 flex items-center justify-center font-display font-bold">
                {initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                  {session?.user?.name || 'Admin'}
                </p>
                <Link href="/" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">
                  ← Back to site
                </Link>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                title="Sign out"
                aria-label="Sign out"
              >
                <FiLogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="relative lg:pl-64 flex flex-col flex-1 pt-14 lg:pt-0">
        <main className="flex-1">
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
