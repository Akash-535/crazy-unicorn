import React, { useEffect } from "react";
import Heading from "../common/Heading";
import { ROADMAP_LIST } from "../utils/helper";
import Description from "../common/Description";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div
      id="roadmap"
      className="pt-[231px] pb-[290px] max-2xl:pb-60 max-xl:pb-48 max-lg:pb-40 px-5 overflow-hidden max-2xl:pt-48 max-xl:pt-40 max-lg:pt-32 max-md:pt-24 relative"
    >
      <img
        className="absolute animate-pulse pointer-events-none right-0 -top-10 max-2xl:max-w-96 max-xl:max-w-72 max-md:max-w-[198px] max-md:top-1/4 -z-[1]"
        src="./assets/images/svg/right-stars.svg"
        alt="stars"
      />
      <img
        className="absolute animate-pulse pointer-events-none left-0 bottom-0 max-2xl:max-w-60 max-xl:max-w-48 max-md:max-w-[198px] max-md:-bottom-10 -z-[1]"
        src="./assets/images/svg/left-stars.svg"
        alt="stars"
      />
      <div className="relative text-center max-w-[272px] mx-auto">
        <img
          className="max-w-[118px] pointer-events-auto absolute -top-12 -right-11 max-lg:-right-6 max-lg:-top-full max-md:max-w-24 max-md:right-6 max-md:-top-[50px] max-sm:right-6"
          src="./assets/images/webp/little-horse-image.webp"
          alt="little horse"
        />
        <Heading text="RoadMap" />
      </div>
      <div className="container pt-[86px] relative flex flex-col justify-center items-center max-2xl:pt-20 max-xl:pt-16 max-lg:pt-14 max-md:pt-8">
        <img
          className="max-lg:hidden pointer-events-none max-w-[640px] w-full max-2xl:max-w-[580px] max-xl:max-w-[460px]"
          src="./assets/images/webp/roadmap-img.webp"
          alt="roadmap image"
        />
        <img
          className="lg:hidden pointer-events-none max-w-[343px]"
          src="./assets/images/webp/roadmap-mobile.webp"
          alt="roadmap image"
        />
        <div className="overflow-x-hidden">
          {ROADMAP_LIST.map((obj, i) => (
            <div
              data-aos={
                i === 0 || i === 3 || i === 5 ? "fade-right" : "fade-left"
              }
              data-aos-duration={
                i === 0
                  ? "800"
                  : i === 1
                  ? "1000"
                  : i === 2
                  ? "1200"
                  : i === 3
                  ? "1400"
                  : i === 4
                  ? "1600"
                  : "1800"
              }
              key={i}
              className={`h-[629px] max-2xl:h-[580px] max-xl:h-[251px] pt-[127px] w-full max-w-[844px] max-2xl:max-w-[770px] max-xl:max-w-[650px] max-2xl:bg-contain bg-roadmap-clouds bg-no-repeat absolute flex justify-center items-center max-xl:pt-20 max-xl:justify-normal max-[575px]:justify-center ${
                i === 0
                  ? "bg-roadmap-left-bg top-[6%] -left-28 max-2xl:-left-20 max-2xl:top-[8%] max-md:left-0 max-xl:bg-roadmap-left-mobile max-xl:top-[13%] max-lg:left-12 max-xl:left-36"
                  : i === 1
                  ? "bg-roadmap-right-bg top-[24%] -right-28 max-2xl:-right-12 max-md:right-0 max-xl:bg-roadmap-right-mobile max-md:pt-8 max-xl:top-[33%] max-lg:-right-24 max-xl:-right-8"
                  : i === 2
                  ? "bg-roadmap-left-bg top-[43%] -left-24 max-2xl:-left-16 max-md:left-0 max-xl:bg-roadmap-left-mobile max-xl:top-1/2 max-lg:left-12 max-xl:left-48"
                  : i === 3
                  ? "bg-roadmap-right-bg top-[60%] -right-24 max-2xl:-right-4 max-md:right-0 max-xl:bg-roadmap-right-mobile max-md:pt-8 max-xl:top-[69%] max-lg:-right-14 max-xl:-right-8"
                  : "bg-roadmap-left-bg top-[80%] -left-20 max-2xl:-left-12 max-md:left-[22px] max-xl:top-[87%] max-xl:bg-roadmap-left-mobile max-lg:left-12 max-xl:left-48"
              }`}
            >
              <div
                className={`relative z-10 ${
                  i === 1 || i === 3
                    ? "pt-28 pl-20 max-2xl:pl-7 max-xl:pt-0 max-md:pl-0 max-md:pr-16"
                    : "pt-20 max-xl:pt-0 max-xl:pl-12 max-md:pl-6 max-md:pb-3.5"
                }`}
              >
                <Heading
                  textTwo={obj.heading}
                  myClassTwo={`max-xl:!text-xl max-md:!text-base ${
                    i === 1 || i === 3 ? "max-xl:text-end" : ""
                  }`}
                />
                <Description
                  text={obj.description}
                  myClass="max-w-[580px] pt-1.5 max-2xl:pt-0.5 max-xl:hidden"
                />
                <Description
                  text={obj.smDescription}
                  myClass={`max-w-[262px] !text-[11px] xl:hidden !leading-[15px] ${
                    i === 1 || i === 3 ? "text-right" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
