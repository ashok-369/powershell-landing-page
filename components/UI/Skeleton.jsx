
import React from 'react';

export const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-deep/10 dark:bg-white/10 rounded ${className}`}></div>
);

export const CardSkeleton = () => (
  <div className="p-8 rounded-card bg-white dark:bg-zinc-800 shadow-card space-y-4">
    <Skeleton className="w-12 h-12 rounded-2xl" />
    <Skeleton className="w-3/4 h-8" />
    <Skeleton className="w-full h-4" />
    <Skeleton className="w-full h-4" />
  </div>
);
