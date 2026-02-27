"use client";

import { RotateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <RotateLoader color="#3b82f6" size={15} />
        <p className="text-slate-600 dark:text-slate-400 text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
