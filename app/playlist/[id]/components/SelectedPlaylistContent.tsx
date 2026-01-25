'use client'
// app/playlist/[id]/components/SelectedPlaylistContent.tsx
import ContentCard from './ContentCard'
import { Playlist } from '@/app/types'
import { useState, useEffect } from 'react'
import { getWatchedVideos, addWatchedVideo, removeWatchedVideo } from '@/app/lib/localStorage'

interface SelectedPlaylistContentProps {
  playlist: Playlist
}

const SelectedPlaylistContent: React.FC<SelectedPlaylistContentProps> = ({ playlist }) => {
    const [watchedVideos, setWatchedVideos] = useState<string[]>([]);

    useEffect(() => {
        setWatchedVideos(getWatchedVideos(playlist.id));
    }, [playlist.id]);

    const handleToggleWatched = (videoId: string) => {
        const wasWatched = watchedVideos.includes(videoId);

        if (wasWatched) {
            removeWatchedVideo(playlist.id, videoId);
            setWatchedVideos(watchedVideos.filter(id => id !== videoId));
        } else {
            addWatchedVideo(playlist.id, videoId);
            setWatchedVideos([...watchedVideos, videoId]);
        }
    };

  if (!playlist) {
    return <div>Loading...</div>
  }

  return (
    <div dir="rtl" className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-text-light dark:text-text-dark">محتويات السلسلة</h2>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {playlist.videos.map((video) => (
          <ContentCard
            key={video.id}
            title={video.title}
            videoId={video.id}
            playlistId={playlist.id}
            // The status will be expanded later to include 'in-progress'
            status={watchedVideos.includes(video.id) ? 'completed' : 'not-started'}
            notesCount={0} // Placeholder for notes count
            onToggle={handleToggleWatched}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectedPlaylistContent
