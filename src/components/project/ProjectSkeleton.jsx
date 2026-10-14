import React from 'react';

export default function ProjectSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm animate-pulse flex flex-col md:flex-row gap-6 items-center">
      {/* Left Image Placeholder Skeleton */}
      <div className="w-full md:w-2/5 h-52 sm:h-56 bg-slate-200 rounded-2xl flex-shrink-0 animate-shimmer" />

      {/* Right Content Skeleton */}
      <div className="w-full md:w-3/5 space-y-4">
        <div className="flex gap-2">
          <div className="h-5 w-20 bg-slate-200 rounded-full" />
          <div className="h-5 w-28 bg-slate-200 rounded-full" />
        </div>
        <div className="h-7 w-3/4 bg-slate-200 rounded-lg" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 rounded" />
          <div className="h-4 w-5/6 bg-slate-200 rounded" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-16 bg-slate-200 rounded-md" />
          <div className="h-6 w-16 bg-slate-200 rounded-md" />
          <div className="h-6 w-16 bg-slate-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}
