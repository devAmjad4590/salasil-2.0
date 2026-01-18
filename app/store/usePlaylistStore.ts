import type { Playlist } from '@/app/types'

import { create } from 'zustand'
import { filters } from '@/app/static'

interface PlaylistState {
  // State variables
  rawPlaylists: Playlist[] // For raw data needed by player components
  activeFilter: string

  // Actions
  setRawPlaylists: (playlists: Playlist[]) => void
  setActiveFilter: (filter: string) => void
}

export const usePlaylistStore = create<PlaylistState>((set) => ({
  rawPlaylists: [],
  activeFilter: filters[0],

  setRawPlaylists: (playlists) => set({ rawPlaylists: playlists }),
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}))
