// components/DownloadButton.jsx
import React from 'react';

const DownloadButton = ({ platform, link, qr, description, onButtonClick, onQrButtonClick, icon }) => {
  return (
    <div className="relative w-full h-[5rem]">
   
      <button
        onClick={() => onButtonClick(link)}
        className="w-full bg-color-3/70 border-n-1/10 h-full backdrop-blur border rounded-[1rem] transition-all duration-300 text-white px-4 py-2 shadow hover:bg-color-3/40 flex items-center  space-x-2"
      >
        {icon}
        {platform}
      </button>
      {qr && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQrButtonClick(platform, description);
          }}
          className="absolute right-4 rounded-[20rem] top-1/2 transform -translate-y-1/2 bg-n-1/20 text-n-1 px-2 py-1 rounded hover:bg-n-8/50"
        >
          QR
        </button>
      )}
    </div>
  );
};

export default DownloadButton;
