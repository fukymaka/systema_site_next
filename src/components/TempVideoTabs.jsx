import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const videos = [
    { id: 1, src: '/assets/systema_tabvideo_1.mp4' },
    { id: 2, src: '/assets/systema_tabvideo_2.mp4' },
    { id: 3, src: '/assets/systema_tabvideo_3.mp4' },
];

const TempVideoTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [playing, setPlaying] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState({});

    useEffect(() => {
        setPlaying(true);
    }, [activeTab]);

    const handleEnded = () => {
        setActiveTab((prev) => (prev === videos.length ? 1 : prev + 1));
    };

    const handleProgress = (state) => {
        const progress = state.played * 100;
        const updatedLoadedVideos = { ...loadedVideos, [activeTab]: progress };
        setLoadedVideos(updatedLoadedVideos);
    };

    const renderVideo = (video) => (
        <div className={`${activeTab === video.id ? 'block' : 'hidden'} w-full`} key={video.id}>
            <ReactPlayer
                url={video.src}
                playing={activeTab === video.id && playing}
                onEnded={handleEnded}
                onProgress={handleProgress}
                width="100%"
                height="auto"
                controls={false}
                muted
            />
            <div className="h-1 bg-gray-300 mt-2">
                <div style={{ width: `${loadedVideos[video.id] || 0}%` }} className="h-full bg-blue-500" />
            </div>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex flex-col w-full md:w-1/4 md:h-full">
                {videos.map((video) => (
                    <button
                        key={video.id}
                        onClick={() => setActiveTab(video.id)}
                        className={`flex-1 py-4 text-center ${activeTab === video.id ? 'bg-gray-300' : 'bg-gray-500'} transition-colors`}
                    >
                        Вкладка {video.id}
                    </button>
                ))}
            </div>
            <div className="w-full md:w-3/4 flex items-center justify-center bg-gray-200">
                {videos.map(renderVideo)}
            </div>
        </div>
    );
};

export default TempVideoTabs;
