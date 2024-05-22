'use client'

import { useState } from 'react';
import { check } from "../../public/assets";
import { pricing } from "../constants";
import Button from "./Button";
import Modal from './Modal';
import CompanyForm from './CompanyForm';
import Check from './design/Check';

const PricingList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex justify-center flex-col xl:flex-row items-stretch gap-[1rem] ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="xl:w-1/3  w-full h-auto px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] flex flex-col justify-between"
        >
          <div>
          <h4 className={`h4 mb-4 ${item.titleColor}`}>{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>
          </div>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price ? 
              <>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
                <div className="h3 ms-3">₽/мес</div>
              </>
            : <div className="h3 ms-3">Индивидуально</div>}
          </div>
          
          <Button
            className="w-full mb-6"
            href={item.price ? "#download" : null}
            white={!item.price}
            outline={!item.price}
            onClick={item.price ? null : handleModalToggle}
            color={item.buttonColor}
          >
            {item.price ? "Скачать" : "Оставить заявку"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <Check fill={item.iconColor}/>
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal}>
        <CompanyForm />
      </Modal>}
    </div>
  );
};

export default PricingList;
