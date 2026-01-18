import type { Playlist } from '../types'

import PlaylistGrid from './components/PlaylistGrid'
import StoreInitializer from '@/app/shared/components/StoreInitializer'
import { title, description } from '@/app/static'
import { getSalaselData } from '../lib/datatransform'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const { courses } = getSalaselData()
  const data: Playlist[] = courses.slice(0, 22)

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <StoreInitializer playlists={data} />
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold tracking-tight text-white mb-2">{title}</h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{description}</p>
      </div>
      <PlaylistGrid />
    </main>
  )
}
