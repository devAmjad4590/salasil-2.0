import { Playlist } from '../types';

// It's a good practice to define the props for the transformed data.
// In this case, we can reuse the PlaylistCardProps from the component.
import { PlaylistCardProps } from '../components/PlaylistCard';

export function transformPlaylistToCardProps(playlist: Playlist): PlaylistCardProps {
  return {
    title: playlist["الاسم"],
    description: playlist["وصف مختصر"],
    imageUrl: playlist.الفيديوهات[0]?.["صورة مصغرة"] || "/placeholder-image.jpg",
    playlistId: playlist["معرف قائمة التشغيل"],
  };
}
