'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide navbar and footer on dashboard and login pages
  const isDashboard = pathname?.startsWith('/dashboard');
  const isLogin = pathname?.startsWith('/login');
  const hideLayout = isDashboard || isLogin;

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
