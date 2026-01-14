// app/playlist/[id]/components/ContentCard.tsx
import Image from 'next/image';

interface ContentCardProps {
    lessonNumber: number;
    title: string;
    duration: string;
    completed?: boolean;
    highlight?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ lessonNumber, title, duration, completed, highlight }) => {
    return (
        <div className={`group relative hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer p-4 sm:px-6 ${highlight ? 'bg-gray-50 dark:bg-gray-700/30' : ''}`}>
            <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                    <div className="w-48 aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                        <Image
                            alt="Code structure diagram"
                            className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity"
                            src="http://img.youtube.com/vi/nkil1U1GxdA/maxresdefault.jpg"
                            fill={true}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                            <span className="material-icons-round text-white text-2xl drop-shadow-md">{completed ? 'check_circle' : 'play_circle'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-primary mb-1">Lesson {lessonNumber}</p>
                        {completed && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                <span className="material-icons-round text-[14px] mr-1">check_circle</span> Completed
                            </span>
                        )}
                    </div>
                    <h3 className="text-lg font-semibold text-text-light dark:text-text-dark truncate group-hover:text-primary transition-colors">{title}</h3>
                </div>
                <div className="ml-4 text-sm text-muted-light dark:text-muted-dark font-medium flex-shrink-0">
                    {duration}
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
