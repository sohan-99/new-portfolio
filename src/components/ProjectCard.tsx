"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiImage, FiX, FiMaximize2 } from "react-icons/fi";
import { Project } from "@/data/projects";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openGallery = () => {
    setShowGallery(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setShowGallery(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = "unset";
  };

  const openFullImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeFullImage = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null && project.gallery) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null && project.gallery) {
      setSelectedImageIndex((selectedImageIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFullImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, project.gallery]);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-full"
      >
        <div className="card overflow-hidden h-[480px] flex flex-col">
          {/* Image */}
          <div 
            className="relative h-48 md:h-56 flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-700 cursor-pointer"
            onClick={() => project.gallery && openGallery()}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gallery indicator */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs">
                  <FiImage className="w-3 h-3" />
                  <span>{project.gallery.length}</span>
                </div>
              </div>
            )}
          
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-2">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Gallery Modal */}
      {showGallery && project.gallery && (
        <div 
          className="fixed inset-0 z-50 bg-black flex flex-col"
          onClick={closeGallery}
        >
          {/* Header */}
          <div className="relative border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-white">
                <FiImage className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Project Gallery</h2>
              </div>
            </div>
            <button
              onClick={closeGallery}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close gallery"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Subtitle */}
          <div className="text-center text-gray-400 text-sm py-3 border-b border-gray-800">
            Click on any image to view in full screen
          </div>

          {/* Gallery Grid */}
          <div 
            className="flex-1 overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {project.gallery.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => openFullImage(idx)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-800 hover:border-primary-500 transition-all">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="mt-2 text-white text-sm font-medium">
                    Image {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Image View */}
      {selectedImageIndex !== null && project.gallery && (
        <div 
          className="fixed inset-0 z-[60] bg-black flex flex-col"
          onClick={closeFullImage}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <div className="flex items-center gap-4">
              <button
                onClick={closeFullImage}
                className="text-white hover:text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close full image"
              >
                <FiX className="w-5 h-5" />
              </button>
              <div className="text-white font-medium text-lg">
                {selectedImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                document.documentElement.requestFullscreen();
              }}
              className="text-white hover:text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fullscreen"
            >
              <FiMaximize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="flex-1 relative flex items-center justify-center p-4">
            {/* Navigation Arrows */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={project.gallery[selectedImageIndex]}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="border-t border-gray-800 px-4 py-4">
            <div className="text-center">
              <div className="text-white text-lg font-semibold mb-1">
                Gallery Image {selectedImageIndex + 1}
              </div>
              <div className="text-gray-400 text-sm">
                Use arrow keys to navigate • ESC to close • Swipe on mobile
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
