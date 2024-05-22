'use client'

import Image from 'next/image'
import { skull, interfaceUi, markers } from "../../public/assets"
import Button from "./Button";
import Section from "./Section";
import { Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[4rem] lg:pt-[8rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
      
    >
      <div>
        <div className="container relative" >
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]" >
            <h1 className="h1 mb-6">
              Детальные и достоверные 3D&nbsp;модели

            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Анатомически точные и научно достоверные
            </p>

          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#C86C68] to-[#FFAA98]">
              <div className="relative bg-n-8 rounded-[1rem]">
                {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" /> */}

                <div className="aspect-[20/40] rounded-[0.9rem] overflow-hidden md:aspect-[1024/590]" >



                  <MouseParallax isAbsolutelyPositioned strength={0.07} parallaxContainerRef={parallaxRef}>
                    <ScrollParallax isAbsolutelyPositioned >
                      <Image
                        src={skull}
                        className="absolute inset-0 w-full scale-[2] md:scale-[1] md:-translate-x-[20%] lg:-translate-x-[10%]  md:-translate-y-[18%] opacity-10"
                        width={1024}
                        height={590}
                        alt="skull"
                      />
                    </ScrollParallax>
                  </MouseParallax>



                  <ScrollParallax >

                    <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                      <Image
                        src={skull}
                        className="w-full scale-[2] md:scale-[1] md:-translate-x-[20%] lg:-translate-x-[10%]  md:-translate-y-[18%]"
                        width={1024}
                        height={590}
                        alt="skull"
                      />

                    </MouseParallax>

                    <MouseParallax isAbsolutelyPositioned strength={0.08} parallaxContainerRef={parallaxRef} className="overflow-hidden">
                      <Image
                        src={markers}
                        className="absolute inset-0 w-full scale-[2] md:scale-[1] md:-translate-x-[20%] lg:-translate-x-[10%]  -translate-y-[18%]"
                        width={1024}
                        height={590}
                        alt="skull"
                      />
                    </MouseParallax>

                  </ScrollParallax>




                  <MouseParallax isAbsolutelyPositioned strength={0.01} parallaxContainerRef={parallaxRef} className="overflow-hidden">
                    <div className="absolute flex justify-center lg:justify-end md:justify-end md:right-4 lg:right-4 bottom-4 w-full">
                      <Image
                        src={interfaceUi}
                        width={300}
                        height={50}
                        alt="Small Image"
                      />
                    </div>
                  </MouseParallax>
                </div>

              </div>

              <Gradient />
            </div>

          </div>
          <h5 className="tagline mt-10 text-center text-n-1/50">
            Продукт зарегистрирован в реестре отечественного ПО
          </h5>

        </div>
      </div>
    </Section>
  );
};

export default Hero;
