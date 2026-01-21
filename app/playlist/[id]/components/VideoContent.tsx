import type { Video } from '@/app/types'
import React, { useState, useEffect } from 'react'
import SidebarContentCard from './SidebarContentCard'
import { getWatchedVideos, addWatchedVideo, removeWatchedVideo } from '@/app/lib/localStorage'

interface VideoContentProps {
  videos: Video[];
  currentVideoId: string;
  playlistId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videos, currentVideoId, playlistId }) => {
    const [watchedVideos, setWatchedVideos] = useState<string[]>([]);

    useEffect(() => {
        setWatchedVideos(getWatchedVideos(playlistId));
    }, [playlistId]);

    const handleToggleWatched = (videoId: string) => {
        const newWatchedVideos = watchedVideos.includes(videoId)
            ? watchedVideos.filter(id => id !== videoId)
            : [...watchedVideos, videoId];
        
        setWatchedVideos(newWatchedVideos);

        if (watchedVideos.includes(videoId)) {
            removeWatchedVideo(playlistId, videoId);
        } else {
            addWatchedVideo(playlistId, videoId);
        }
    };

  return (
    <div className="flex-1 overflow-y-auto pr-1 space-y-2">
      {videos.map((video, index) => (
        <SidebarContentCard
          key={video.id}
          lessonNumber={index + 1}
          title={video.title}
          duration={video.duration}
          videoId={video.id}
          highlight={video.id === currentVideoId}
          playlistId={playlistId}
          completed={watchedVideos.includes(video.id)}
          onToggle={handleToggleWatched}
        />
      ))}
    </div>
  )
}

export default VideoContent
