import React from 'react';
import fs from 'fs';
import path from 'path';
import VideoPlayer from '../../components/VideoPlayer';
import PlaylistSidebar from '../../components/PlaylistSidebar';
import VideoDetailsTabs from '../../components/VideoDetailsTabs';
import { Playlist as Course, SalasilData } from '../../types';
import { transformSinglePlaylist } from '../../lib/datatransform';

// Helper function to read the data
async function getSalasilData(): Promise<SalasilData> {
  const filePath = path.join(process.cwd(), 'public', 'salasil.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  // In `salasil.json`, the top-level array is called `courses`, which matches our SalasilData type
  return JSON.parse(jsonData);
}

export async function generateStaticParams() {
  const data = await getSalasilData();
  // Generate paths for the first 22 playlists
  return data.courses.slice(0, 22).map((course) => ({
    id: course['معرف قائمة التشغيل'],
  }));
}

const PlaylistPage = async (props: { params: { id: string } }) => {
  const params = await props.params;
  const data = await getSalasilData();
  const rawPlaylist = data.courses.find(
    (course) => course['معرف قائمة التشغيل'] == params.id
  );

  if (!rawPlaylist) {
    return <div>Playlist not found</div>;
  }

  const playlist = transformSinglePlaylist(rawPlaylist);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <VideoPlayer playlist={playlist} />
        </div>
        <div className="lg:col-span-1">
          <PlaylistSidebar playlist={playlist} />
        </div>
      </div>
      <VideoDetailsTabs />
    </main>
  );
};

export default PlaylistPage;
