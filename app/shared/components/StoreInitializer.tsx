'use client'

import type { Playlist } from '@/app/types'

import { useEffect, useRef } from 'react'
import { usePlaylistStore } from '@/app/store/usePlaylistStore'

interface StoreInitializerProps {
  // The home page passes the raw playlist data
  playlists: Playlist[]
}

const StoreInitializer: React.FC<StoreInitializerProps> = ({ playlists }) => {
  const initialized = useRef(false)
  const setRawPlaylists = usePlaylistStore((state) => state.setRawPlaylists)

  useEffect(() => {
    // This effect should only run once on the client to initialize the store
    if (!initialized.current) {
      // Set the raw playlists
      setRawPlaylists(playlists)
      initialized.current = true
    }
  }, [playlists, setRawPlaylists])

  return null // This component renders nothing, its only job is to fill the store
}

export default StoreInitializer

