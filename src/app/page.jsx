import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import ButtonGradient from "../../public/assets/svg/ButtonGradient";
import Feedback from "@/components/Feedback";
import ModelTypes from "@/components/ModelTypes";
import HeroVideo from "@/components/HeroVideo";
import DownloadSection from "@/components/DownloadSection";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F08A81] via-[#D07068] to-[#B0564F] opacity-5"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D07068] rounded-full filter blur-3xl opacity-5"></div>
          <div className="absolute top-48 right-0 w-80 h-80 bg-[#B0564F] rounded-full filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#F08A81] rounded-full filter blur-3xl opacity-50"></div>
        </div> */}

        <div className="relative pt-[4.75rem] lg:pt-[5.25rem] z-10">
          {/* <Header /> */}
          <HeroVideo />
          <Hero />
          <ModelTypes />
          <Collaboration />
          <Services />
          <Roadmap />
          <Pricing />
          <DownloadSection />
          <Reviews />
          <Feedback />
          
        </div>
      </div>

      <ButtonGradient />
    </>
  );
}
