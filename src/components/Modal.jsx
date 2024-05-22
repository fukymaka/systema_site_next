// components/Modal.js
'use client';

import { useEffect } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Modal = ({ showModal, setShowModal, children }) => {

    useEffect(() => {
        handleModalToggle;
        // console.log(showModal)
        // disablePageScroll()
    }, [showModal]);

    const handleModalToggle = () => {
        // enablePageScroll();

        setShowModal(!showModal);
    }

    return (
        <div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={handleModalToggle}>
                    <div className="bg-n-1 w-full lg:w-1/3 mx-8 p-8 rounded-[2rem] shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => { setShowModal(false); enablePageScroll(); }}
                            className="absolute top-5 right-5 text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};


export default Modal;
