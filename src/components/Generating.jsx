import Image from 'next/image'
import {loading} from "../../public/assets"

const Generating = ({describe, className }) => {
  return (
    <div
      className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* <Image className="w-5 h-5 mr-4 " src={loading} alt="Loading" /> */}
      {describe}
    </div>
  );
};

export default Generating;
