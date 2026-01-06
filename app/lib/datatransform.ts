import { Playlist } from '../types';

// It's a good practice to define the props for the transformed data.
// In this case, we can reuse the PlaylistCardProps from the component.
import { PlaylistCardProps } from '../components/PlaylistCard';

export function transformPlaylistToCardProps(playlist: Playlist): PlaylistCardProps {
  const rawTags = playlist["التصانيف"];
  const tagsArray = typeof rawTags === 'string' && rawTags.trim() !== ''
    ? rawTags.split(',').map(tag => tag.trim())
    : [];

  return {
    title: playlist["الاسم"],
    description: playlist["وصف مختصر"],
    imageUrl: (playlist.الفيديوهات && playlist.الفيديوهات.length > 0)
      ? playlist.الفيديوهات[0]["صورة مصغرة"]
      : "/next.svg",
    playlistId: playlist["معرف قائمة التشغيل"],
    tags: tagsArray,
  };
}
