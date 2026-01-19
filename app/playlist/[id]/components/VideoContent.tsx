import type { Video } from '@/app/types'
import React from 'react'
import ContentCard from './ContentCard'

interface VideoContentProps {
  videos: Video[];
  currentVideoId: string;
  playlistId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videos, currentVideoId, playlistId }) => {
  return (
    <div className="flex-1 overflow-y-auto pr-1 space-y-2">
      {videos.map((video, index) => (
        <ContentCard
          key={video.id}
          lessonNumber={index + 1}
          title={video.title}
          duration={video.duration}
          videoId={video.id}
          highlight={video.id === currentVideoId}
          completed={false} // This can be connected to user state later
          playlistId={playlistId}
          showImage={false}
        />
      ))}
    </div>
  )
}

export default VideoContent
