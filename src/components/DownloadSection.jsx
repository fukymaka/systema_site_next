'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import QRCode from 'qrcode.react';
import DownloadButton from './design/DownloadButton';
import Section from './Section';
import Heading from './Heading';
import { platformIcons } from "../constants";

const DownloadSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [qrData, setQrData] = useState({ link: '', description: '' });

  const platforms = [
    { name: 'Windows', link: 'https://api2.systema-learn.com/api/v1/update/downloadLastVersion/Release', description: 'Скачать для Windows', icon: platformIcons[0] },
    { name: 'App Store', link: 'https://apps.apple.com/app/apple-store/id1610315628?pt=126514403&ct=systemasite&mt=8', qr: true, description: 'Скачать с App Store', icon: platformIcons[3] },
    { name: 'Google Play', link: 'https://play.google.com/store/apps/details?id=com.piter.systema', qr: true, description: 'Скачать с Google Play', icon: platformIcons[1] },
    { name: 'RuStore', link: 'https://apps.rustore.ru/app/com.piter.systema', qr: true, description: 'Скачать с RuStore', icon: platformIcons[4] }
  ];

  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };

  const handleQrButtonClick = (link, description) => {
    setQrData({ link, description });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Section id="download" className="">
      <div className='container mt-10'>
        <div className='p-0.25 rounded-[2.5rem] bg-conic-gradient'>
          <div className="relative bg-n-7 shadow-2xl p-8 md:p-20 rounded-[2.5rem] ">
            <div className="w-full  md:w-1/2 flex flex-col justify-center">
              <div className="mb-12 lg:mb-20">
                <h2 className="h2 text-left">Скачайте SYSTEMA прямо сейчас!</h2>
                <p className="body-1 mt-4 text-n-3">Пользуйтесь анатомическим атласом на любом устройстве в любое время</p>
              </div>
              <div className="grid z-10 grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4 items-center">
                {platforms.map(platform => (
                  <DownloadButton
                    key={platform.name}
                    platform={platform.name}
                    link={platform.link}
                    qr={platform.qr}
                    description={platform.description}
                    onButtonClick={handleButtonClick}
                    onQrButtonClick={() => handleQrButtonClick(platform.link, platform.description)}
                    icon={<Image src={platform.icon} alt="" width={25} height={25} className="mr-5" />}
                  />
                ))}
              </div>
            </div>
            <div className="hidden md:block w-full  md:w-1/2">
              <div className="md:absolute md:inset-0 z-0  -mt-[15rem] -mb-[15rem]">
                <Image
                  src="/assets/download_bg.png"
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20" onClick={handleCloseModal}>
          <div className="bg-white p-8 rounded shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <QRCode value={qrData.link} size={256} />
            <p className="mt-4 text-center text-black">{qrData.description}</p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default DownloadSection;
