'use client';

import { Playlist } from '@/app/types';
import Link from 'next/link';
import React from 'react';

// NOTE: This component is currently using placeholder data.
// It will need to be connected to a state management solution (e.g., Zustand, Context)
// to get real user progress, notes count, and the next video to watch.

const PersonalProgress = ({ playlist, firstVideoId }: { playlist: Playlist, firstVideoId: string }) => {
  const nextVideo = "اسم الفيديو التالي هنا"; // Placeholder
  const videoProgress = 30; // Placeholder
  const playlistProgress = 10; // Placeholder
  const notesCount = 5; // Placeholder

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-4">
        التقدم الشخصي
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Next Video */}
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-semibold text-muted-light dark:text-muted-dark">
            التالي للمشاهدة
          </span>
          <span className="text-base font-bold text-text-light dark:text-text-dark">
            {nextVideo}
          </span>
        </div>

        {/* Notes Count */}
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-semibold text-muted-light dark:text-muted-dark">
            مجموع الملاحظات
          </span>
          <span className="text-base font-bold text-text-light dark:text-text-dark">
            {notesCount}
          </span>
        </div>

        {/* Progress Bars */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          {/* Video Progress */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-muted-light dark:text-muted-dark mb-1">
              <span>تقدم الفيديو الحالي</span>
              <span>{videoProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${videoProgress}%` }}></div>
            </div>
          </div>
          {/* Playlist Progress */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-muted-light dark:text-muted-dark mb-1">
              <span>تقدم السلسلة</span>
              <span>{playlistProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: `${playlistProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <Link 
          href={`/playlist/${playlist.id}/${firstVideoId}`} 
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-105 cursor-pointer"
        >
          <span className="material-icons-round mr-2">play_arrow</span>
          {playlistProgress > 0 ? 'متابعة المشاهدة' : 'ابدأ المشاهدة'}
        </Link>
      </div>
    </div>
  );
};

export default PersonalProgress;
