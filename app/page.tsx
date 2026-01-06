
import PlaylistCard from "./components/PlaylistCard";
import FilterGrid from "./components/FilterGrid";
import { Playlist } from './types';
import fs from 'fs/promises';
import path from 'path';
import { transformPlaylistToCardProps } from './lib/datatransform';

async function getPlaylists(): Promise<Playlist[]> {
  const filePath = path.join(process.cwd(), 'public', 'salasil.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data.courses;
}

export default async function Home() {
  const playlists = await getPlaylists();
  const playlistsToShow = playlists.slice(1, 22); 

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold tracking-tight text-white mb-2">سلاسل</h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          استكشف عالمًا من المحتوى المنسق المصمم للوضوح والتركيز.
        </p>
      </div>
      <FilterGrid /> {/* Assuming FilterGrid is still desired here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {playlistsToShow.map((playlist) => (
          <PlaylistCard
            key={playlist["معرف قائمة التشغيل"]}
            {...transformPlaylistToCardProps(playlist)}
          />
        ))}
      </div>
    </main>
  );
}
