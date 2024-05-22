import Image from 'next/image'
import { appstore } from "../../public/assets";
import { googleplay } from "../../public/assets";
import { star } from "../../public/assets";


const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Оценки
      </h5>
      <ul className="flex items-center justify-center">
        <li
          className="flex items-center justify-center mr-10"
        >
          <Image src={appstore} width={50} height={50} alt={appstore} />
          <h5 className='ml-5 text-3xl font-black'>4.5</h5>
          <Image className='ml-2' src={star} width={25} height={25} alt={star} />
        </li>
        <li
          className="flex items-center justify-center ml-10"
        >
          <Image src={googleplay} width={50} height={50} alt={googleplay} />
          <h5 className='ml-5 text-3xl font-black'>4.5</h5>
          <Image className='ml-2' src={star} width={25} height={25} alt={star} />
        </li>
      </ul>
    </div>
  );
};

export default CompanyLogos;
