'use client';

import { useState, useEffect, useRef } from 'react';
import { check } from "../../public/assets";
import Image from 'next/image';

const defaultTabs = [
  { title: 'Видео 1', description: 'Описание первого видео', videoUrl: '/videos/video1.mp4' },
  { title: 'Видео 2', description: 'Описание второго видео', videoUrl: '/videos/video2.mp4' },
  { title: 'Видео 3', description: 'Описание третьего видео', videoUrl: '/videos/video3.mp4' },
];

function HeroVideoTabs({ tabs = defaultTabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize(); // Call the function immediately to set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoEvents = () => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    };

    const handleTimeUpdate = () => {
      if (videoElement) {
        const currentTime = videoElement.currentTime;
        const duration = videoElement.duration;
        setProgress((currentTime / duration) * 100);
      }
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      videoElement.play();
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('loadeddata', handleLoadedData);

      if (videoElement.readyState >= 2) {
        handleLoadedData();
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      }
    };
  };

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    handleVideoEvents();
  }, [activeTab]);

  return (
    <div className="flex xl:h-[27rem] flex-col xl:flex-row w-full justify-center items-center mb-20 transition-all duration-100">
      <div className="w-full h-full flex flex-col xl:pr-4">
        {tabs.map((tab, index) => (
          <div key={index} className={`${index === 1 && 'mt-2 mb-2'} transition-all duration-300 ${activeTab === index ? 'flex-grow' : ''}`}>
            <div
              className={`flex flex-col justify-between p-4 backdrop-blur border rounded-[1rem] transition-all duration-300 ${activeTab === index ? 'bg-n-9/20 border-n-1/10 h-full' : 'bg-n-9/10 border-transparent cursor-pointer'}`}
              onClick={() => setActiveTab(index)}
            >
              <div>
                <div className='flex flex-row'>
                  <Image width={24} height={24} src={check} className={`mr-4 ${activeTab === index ? 'opacity-100' : 'opacity-50'}`} />
                  <h2 className="text-white text-lg">{tab.title}</h2>
                </div>
                <div className={`xl:absolute xl:p-4 xl:pl-0 tab-content ${activeTab === index ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'} transition-all duration-100`}>
                  <p className="text-gray-400 mt-2">{tab.description}</p>
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
                <video
                  ref={videoRef}
                  src={tab.videoUrl}
                  className={`w-full min-h-[5rem] object-cover rounded-[1rem]  transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  controls={false}
                  autoPlay
                  muted
                  playsInline
                />
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
          <video
            ref={videoRef}
            src={tabs[activeTab].videoUrl}
            className={`object-cover rounded-[1rem] transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            controls={false}
            autoPlay
            muted
            playsInline
          />
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HeroVideoTabs;
