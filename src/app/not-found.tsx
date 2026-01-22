"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* 404 Text */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[150px] md:text-[200px] font-bold leading-none gradient-text"
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/" className="btn-primary">
              <FiHome className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <FiArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
