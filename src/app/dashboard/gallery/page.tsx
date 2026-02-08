'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import ImageGallery from '@/components/ImageGallery';

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SectionHeader
          title="Image Gallery"
          description="Upload and manage your images"
        />
      </motion.div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <ImageGallery />
      </div>
    </div>
  );
}
