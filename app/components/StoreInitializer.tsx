"use client";

import { useEffect, useRef } from 'react';
import { usePlaylistStore } from '../store/usePlaylistStore';
import { Playlist } from '../types';
import { transformPlaylistToCardProps } from '../lib/datatransform';

interface StoreInitializerProps {
  // The home page passes the raw playlist data
  playlists: Playlist[];
}

function StoreInitializer({ playlists }: StoreInitializerProps) {
  const initialized = useRef(false);
  const setRawPlaylists = usePlaylistStore((state) => state.setRawPlaylists);
  const setCardPlaylists = usePlaylistStore((state) => state.setCardPlaylists);

  useEffect(() => {
    // This effect should only run once on the client to initialize the store
    if (!initialized.current) {
      // Set the raw playlists
      setRawPlaylists(playlists);

      // Set the card-props playlists (transformed)
      const playlistsForState = playlists.map(p => transformPlaylistToCardProps(p));
      setCardPlaylists(playlistsForState);
      initialized.current = true;
    }
  }, [playlists, setRawPlaylists, setCardPlaylists]);

  return null; // This component renders nothing, its only job is to fill the store
}

export default StoreInitializer;
