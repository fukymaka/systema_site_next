import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { check, circle } from "../../public/assets";
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player/file'), { ssr: false });

const videos = [
    {
        id: 0,
        title: 'Детальные анатомические 3D сцены',
        description: 'Высококачественные и научно достоверные 3D модели анатомических структур',
        src: '/assets/systema_tabvideo_1.mp4',
    },
    {
        id: 1,
        title: 'Исследуй анатомические модели с помощью Меток',
        description: 'Дополнительная информация о том или ином элементе анатомической структуры',
        src: '/assets/systema_tabvideo_2.mp4',
    },
    {
        id: 2,
        title: 'Изучай анатомию по лекциям',
        description: 'Теоретический материал, соответствующий образовательной программе медицинских образовательных учреждений',
        src: '/assets/systema_tabvideo_3.mp4',
    },
];

const NewVideoTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleEnded = () => {
        setActiveTab((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const handleProgress = (state) => {
        const progress = state.played * 100;
        setProgress(progress)
    };

    const handleChangeTab = (index) => {
        setActiveTab(index)
        setProgress(0)
        setIsLoading(true);
    }

    const renderVideo = (video) => (
        <div className={`${activeTab === video.id ? 'block' : 'hidden'} relative flex-grow h-full bg-n-1/10 rounded-[1rem] w-full aspect-video flex justify-center items-center transition-all duration-300`} key={video.id}>
            <ReactPlayer
                className="react-player-wrapper"
                url={video.src}
                playing={activeTab === video.id}
                onEnded={handleEnded}
                onProgress={handleProgress}
                width="100%"
                height="auto"
                onReady={() => setIsLoading(false)}
                controls={false}
                muted
                playsinline
            />
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            )}

        </div>
    );

    return (
        <div>
            <div className="flex xl:h-[27rem] flex-col xl:flex-row w-full justify-center items-center mb-20 transition-all duration-100">
                <div className="w-full h-full flex flex-col xl:pr-4">
                    {videos.map((video, index) => (
                        <div key={index} className={`${index === 1 && 'mt-2 mb-2'} transition-all duration-300 ${activeTab === index ? 'flex-grow' : ''}`}>
                            <div
                                className={`flex flex-col justify-between p-4 backdrop-blur border rounded-[1rem] transition-all duration-300 ${activeTab === index ? 'bg-n-9/20 border-n-1/10 h-full' : 'bg-n-9/10 border-transparent cursor-pointer'}`}
                                onClick={() => handleChangeTab(index)}
                            >
                                <div>
                                    {/* <div className='flex flex-row'>
                                        <Image width={24} height={24} src={check} className={`mr-4 ${activeTab === index ? 'opacity-100' : 'opacity-30'}`} />
                                        <h2 className="text-white text-lg">{video.title}</h2>
                                    </div> */}
                                    <div className='flex flex-row justify-start items-center'>
                                        {activeTab === index ? (
                                            <Image width={24} height={24} src={check} className="mr-4"/>
                                        ) : (
                                            <Image width={24} height={24} src={circle} className="mr-4 opacity-20"/>
                                        )}
                                        <h2 className="text-white text-lg">{video.title}</h2>
                                    </div>

                                    <div className={`xl:absolute xl:p-4 xl:pl-0 tab-content ${activeTab === index ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'} transition-all duration-100`}>
                                        <p className="text-gray-400 mt-2">{video.description}</p>
                                    </div>
                                </div>
                                {activeTab === index && (
                                    <div className="w-full bg-n-1/10 h-1 mt-2 relative rounded">
                                        <div className="absolute top-0 left-0 h-full bg-n-1/20 rounded transition-all" style={{ width: `${progress}%` }}></div>
                                    </div>
                                )}
                            </div>
                            {activeTab === index && isMobile && (
                                <div className="w-full xl:w-2/3 flex bg-n-1/10 backdrop-blur rounded-[1rem] justify-center items-center mt-2 mb-2 transition-all duration-300">
                                    {renderVideo(videos[activeTab])}
                                    {isLoading && (
                                        <div className="absolute inset-0 flex justify-center items-center">
                                            <div className="loader"></div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {!isMobile && (
                    <div className="relative flex-grow h-full bg-n-1/10 rounded-[1rem] w-full aspect-video flex justify-center items-center transition-all duration-300">
                        {renderVideo(videos[activeTab])}
                        {isLoading && (
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="loader"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

    );
};

export default NewVideoTabs;
