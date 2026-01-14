// app/playlist/[id]/components/SelectedPlaylistCard.tsx
import Image from 'next/image';

const SelectedPlaylistCard = () => {
    const imageUrl = "http://img.youtube.com/vi/nkil1U1GxdA/maxresdefault.jpg";

    return (
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row">
                <div className="p-6 lg:w-1/2 flex flex-col justify-center space-y-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-text-light dark:text-text-dark mb-2 tracking-tight">Advanced Web Development</h1>
                        <div className="flex items-center space-x-4 text-sm text-muted-light dark:text-muted-dark font-medium">
                            <span className="flex items-center"><span className="material-icons-round text-base mr-1">schedule</span> 3 hours, 25 mins</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="flex items-center"><span className="material-icons-round text-base mr-1">ondemand_video</span> 12 Videos</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>By Sarah Jenkins</span>
                        </div>
                    </div>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        Master the art of building scalable web applications. This comprehensive roadmap covers everything from modern CSS techniques to advanced state management patterns. Learn how to structure large codebases, optimize performance, and deploy with confidence. Ideal for developers looking to level up their engineering skills.
                    </p>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs font-semibold text-muted-light dark:text-muted-dark">
                            <span>Progress</span>
                            <span>35%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-105">
                            <span className="material-icons-round mr-2">play_arrow</span>
                            Continue Learning
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 relative bg-gray-100 dark:bg-gray-800 h-[340px]">
                    <Image
                        alt="Coding on laptop screen abstract"
                        className="w-full h-full object-cover"
                        src={imageUrl}
                        fill={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 dark:to-black/30 pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlaylistCard;
