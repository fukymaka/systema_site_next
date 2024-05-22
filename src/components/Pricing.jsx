import Image from 'next/image'
import Section from "./Section";
import { proMozg, stars } from "../../public/assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden mt-10 md:mt-0" id="pricing" customPaddings>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[4rem] lg:flex">
          <Image
            src={proMozg}
            className="relative z-1"
            width={355}
            height={355}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Скачайте бесплатно и оцените возможности"
          title="Тарифы"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div> */}
      </div>
    </Section>
  );
};

export default Pricing;
