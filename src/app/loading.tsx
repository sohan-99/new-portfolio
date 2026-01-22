export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-900 rounded-full" />
        {/* Spinning ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary-500 rounded-full animate-spin" />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-primary-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
