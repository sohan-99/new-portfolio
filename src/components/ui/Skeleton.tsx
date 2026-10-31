import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-lg bg-slate-200 dark:bg-white/10",
        className
      )}
    />
  );
}

/** Public page header: eyebrow + title + description */
function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="h-10 w-64 md:w-96" />
      <Skeleton className="h-4 w-72 md:w-[28rem]" />
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="card overflow-hidden">
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

/** Generic public page: header + grid of cards */
export function PageSkeleton() {
  return (
    <div className="min-h-screen pt-32 pb-20" role="status" aria-label="Loading">
      <div className="container-custom">
        <HeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Single blog post */
export function ArticleSkeleton() {
  return (
    <div className="min-h-screen pt-32 pb-20" role="status" aria-label="Loading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-2/3" />
        <div className="flex gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-72 w-full rounded-2xl" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className={cn("h-4", i % 4 === 3 ? "w-1/2" : "w-full")} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Dashboard: stat cards + table rows */
export function DashboardSkeleton() {
  return (
    <div className="space-y-6" role="status" aria-label="Loading">
      <Skeleton className="h-8 w-48" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="card p-5 space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>
      <TableSkeleton rows={5} />
    </div>
  );
}

/** Dashboard list/table */
export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="card divide-y divide-slate-200 dark:divide-white/10" role="status" aria-label="Loading">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4">
          <Skeleton className="h-12 w-12 shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      ))}
    </div>
  );
}

/** Dashboard edit form */
export function FormSkeleton() {
  return (
    <div className="space-y-6 max-w-3xl" role="status" aria-label="Loading">
      <Skeleton className="h-8 w-56" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full" />
        </div>
      ))}
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-11 w-32 rounded-full" />
    </div>
  );
}

/** Image gallery grid */
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="status" aria-label="Loading">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="aspect-square w-full rounded-xl" />
      ))}
    </div>
  );
}
