'use client'

import React from 'react'
import { usePlaylistStore } from '@/app/store/usePlaylistStore'
import FilterGrid from './FilterGrid'
import PlaylistCard from './PlaylistCard'
import { filters } from '@/app/static'

const PlaylistGrid: React.FC = () => {
  // This component now gets all its data directly from the client-side store
  const { activeFilter, rawPlaylists } = usePlaylistStore()

  const filteredPlaylists = rawPlaylists.filter((playlist) => {
    if (activeFilter === filters[0]) {
      return true
    }
    // The 'categories' property exists on the 'Playlist' type in the store
    return playlist.categories.includes(activeFilter as any)
  })

  return (
    <>
      <FilterGrid />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredPlaylists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </>
  )
}

export default PlaylistGrid

