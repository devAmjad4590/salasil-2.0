// app/playlist/[id]/components/SelectedPlaylistContent.tsx
import ContentCard from './ContentCard';

const SelectedPlaylistContent = () => {
    return (
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Course Content</h2>
                <span className="text-sm text-muted-light dark:text-muted-dark font-medium">12 Lessons</span>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <ContentCard lessonNumber={1} title="Setting Up the Architecture" duration="15:30" completed={true} />
                <ContentCard lessonNumber={2} title="Advanced CSS Grid Layouts" duration="22:15" />
                <ContentCard lessonNumber={3} title="State Management Deep Dive" duration="45:00" />
                <ContentCard lessonNumber={4} title="Performance Optimization" duration="28:45" />
                <ContentCard lessonNumber={5} title="Deployment Strategies" duration="19:20" />
            </div>
        </div>
    );
};

export default SelectedPlaylistContent;
