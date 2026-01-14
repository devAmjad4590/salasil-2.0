// app/playlist/[id]/page.tsx
import SelectedPlaylistCard from './components/SelectedPlaylistCard';
import SelectedPlaylistContent from './components/SelectedPlaylistContent';

const SelectedPlaylistPage = () => {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SelectedPlaylistCard />
      <SelectedPlaylistContent />
    </main>
  );
};

export default SelectedPlaylistPage;