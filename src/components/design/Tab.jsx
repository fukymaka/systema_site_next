import Image from 'next/image'
import { notification1 } from "../../../public/assets";
import { notificationImages } from "../../constants";

const Tab = ({ className, title, onClick, active }) => {
  return (
    <button
      className={`${
        className || ""
      } ${active ? "bg-n-9/70" : "bg-n-9/40"} flex items-center p-4 pr-6  backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
      onClick={onClick}
    >

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        
      </div>
    </button>
  );
};

export default Tab;
