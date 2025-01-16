import React from "react";
import { SOCIAL_MEDIA_LIST } from "../utils/helper";
import starLottie from "../lottie/footer-stars.json";
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <div className=" relative flex items-center justify-center">
      <Lottie
        className="absolute -bottom-1 left-0 z-[1] max-2xl:max-w-96 max-xl:max-w-72 max-md:hidden"
        animationData={starLottie}
      />
      <div className="flex lg:pt-44 pt-28 flex-col z-10 items-center justify-center">
        <a href="#">
          <img
            className="w-full max-sm:max-w-[100px] "
            src="./assets/images/webp/footer-logo.webp"
            alt="footer logo"
          />
        </a>
        <div className="flex gap-[21px] sm:pt-[60px] py-8 sm:pb-16">
          {SOCIAL_MEDIA_LIST.map((obj, i) => (
            <a
              key={i}
              href={obj.link}
              target="_blank"
              className="hover:scale-110 duration-300 ease-linear footer-icons"
            >
              {obj.icon}
            </a>
          ))}
        </div>
        <a
          href="mailto:Copyright@CrazyUnicorn.com"
          className="sm:text-xl opacity-70 font-comic sm:pb-16 pb-10"
        >
          Copyright@CrazyUnicorn.com
        </a>
      </div>
      <img
        className="absolute left-2/4 -translate-x-2/4 top-[5%] w-full max-w-[516px] lg:hidden pointer-events-none"
        src="./assets/images/webp/full-rainbow.webp"
        alt=""
      />
      <img
        className="absolute right-0 -top-[10%] w-full max-w-[580px] h-[667px] object-cover bottom-0 max-lg:hidden pointer-events-none"
        src="./assets/images/webp/footer-rainbow.webp"
        alt="rainbow"
      />
      <img
        className="absolute right-0 top-0 opacity-75 w-full bottom-0 object-cover h-full pointer-events-none"
        src="./assets/images/webp/footer-clouds.webp"
        alt="footer clouds"
      />
    </div>
  );
};

export default Footer;
