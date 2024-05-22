'use client'

import Image from 'next/image'
import { curve } from "../../public/assets"
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef, useState } from "react";
import HeroVideoTabs from './HeroVideoTabs';
import TempVideoTabs from './TempVideoTabs';
import NewVideoTabs from './NewVideoTabs';

const HeroVideo = () => {
    const parallaxRef = useRef(null);

    // const [activeTab, setActiveTab] = useState(1);

    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };

    const tabs = [
        {
            title: 'Детальные анатомические 3D сцены',
            description: 'Высококачественные и научно достоверные 3D модели анатомических структур',
            videoUrl: '/assets/systema_tabvideo_1.mp4',
        },
        {
            title: 'Исследуй анатомические модели с помощью Меток',
            description: 'Дополнительная информация о том или ином элементе анатомической структуры',
            videoUrl: '/assets/systema_tabvideo_2.mp4',
        },
        {
            title: 'Изучай анатомию по лекциям',
            description: 'Теоретический материал, соответствующий образовательной программе медицинских образовательных учреждений',
            videoUrl: '/assets/systema_tabvideo_3.mp4',
        },
    ];

    return (
        <Section
            className="pt-[8rem] -mt-[5rem]"
            // crosses
            // crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >


            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="container relative z-2">

                <div className="z-1 container relative" ref={parallaxRef}>
                    <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2rem] md:mb-[2rem] lg:mb-[2rem]">
                        <h1 className="h1 mb-6">
                            Анатомический 3D-атлас {` `}
                            <span className="inline-block relative">
                                SYSTEMA{" "}
                                <Image
                                    src={curve}
                                    className="absolute top-full left-0 w-full xl:-mt-2"
                                    width={624}
                                    height={28}
                                    alt="Curve"
                                />
                            </span>
                        </h1>
                        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                            Трехмерный интерактивный атлас для комплексного изучения анатомии
                        </p>
                        <Button href="#download" color="bg-white"  textColor="text-black">
                            Скачать бесплатно
                        </Button>
                    </div>

                    {/* < HeroVideoTabs tabs={tabs} /> */}
                    {/* <TempVideoTabs /> */}
                    <NewVideoTabs/>
                </div>
                {/* <BackgroundCircles /> */}
            </div>
            {/* <BottomLine /> */}

        </Section>
    );
};

export default HeroVideo;
