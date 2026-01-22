"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw, FiHome } from "react-icons/fi";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Error icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
          >
            <span className="text-5xl">😕</span>
          </motion.div>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Something went wrong!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            An unexpected error occurred. Don't worry, it's not your fault.
            Please try again or go back to the home page.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={reset} className="btn-primary">
              <FiRefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              <FiHome className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
