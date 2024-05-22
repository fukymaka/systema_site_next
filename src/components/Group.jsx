import { useMemo } from "react";

const GroupComponent = ({ appStore, propTextAlign, propMinWidth }) => {
  const appStoreStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch rounded-10xl bg-gainsboro flex flex-row items-start justify-between pt-[18px] pb-[19px] pr-[27px] pl-[50px] box-border max-w-full gap-[20px] text-left text-17xl text-black font-inter mq900:pl-[25px] mq900:box-border mq450:flex-wrap mq450:justify-center">
      <div className="h-[138px] w-[492px] relative rounded-10xl bg-gainsboro hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
        <b
          className="relative z-[3] mq900:text-10xl mq450:text-3xl"
          style={appStoreStyle}
        >
          {appStore}
        </b>
      </div>
      <div
        className="h-[101px] w-[101px] relative text-center text-white"
        style={frameDivStyle}
      >
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dimgray w-full h-full z-[1]" />
        <div className="absolute top-[29px] left-[26px] font-light inline-block min-w-[50px] z-[2] mq900:text-10xl mq450:text-3xl">
          QR
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
