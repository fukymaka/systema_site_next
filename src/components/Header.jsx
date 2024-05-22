'use client'

import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from 'next/image';
import { systemaLogo } from "../../public/assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../../public/assets/svg/MenuSvg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CompanyForm from "./CompanyForm";
import Modal from "./Modal";


const Header = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {

    console.log(showModal);

    setShowModal(!showModal);

  };


  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };


  return (
    <div>
      <nav className={`fixed py-5 px-10 top-0 w-full flex items-center justify-between z-30 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
        <a href="#hero">
          <Image src={systemaLogo} width={190} height={40} alt="Systema Logo" />
        </a>
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`font-code text-s uppercase text-n-1 transition-colors hover:text-color-3 ${item.url === pathname.hash ? "text-n-1" : "text-n-1/50"} leading-5`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex space-x-4">
          <Button onClick={handleModalToggle} outline borderColor="border-white" hoverColor="hover:bg-white">
            Для организаций
          </Button>
          <Button href="#download" hoverColor="hover:bg-main/50" textHoverColor="hover:text-white">
            Скачать
          </Button>
        </div>
        <Button
          className="lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
          outline
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </nav>
      {openNavigation && (
        <div className="lg:hidden fixed inset-0 z-20 bg-n-8 flex flex-col items-center justify-center space-y-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className="font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6"
            >
              {item.title}
            </a>
          ))}
          <Button onClick={() => { handleClick(); handleModalToggle(); }} white outline>
            Для организаций
          </Button>
          <Button onClick={handleClick} href="#download">
            Скачать
          </Button>
        </div>
      )}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal}>
        <CompanyForm />
      </Modal>}
    </div>
  );
};

export default Header;
