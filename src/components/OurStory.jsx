import React from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";

const OurStory = () => {
  return (
    <div id="story" className="max-xl:pt-16 max-md:pt-10 relative z-[3]">
      <img
        src="./assets/images/webp/footer-clouds.webp"
        alt="cloud"
        className="absolute rotate-180 top-0 h-1/4 w-full pointer-events-none -mt-1 min-[1921px]:h-[40%]"
      />
      <img
        className="absolute left-0 -top-1/4 -z-[1] max-2xl:max-w-96 max-xl:max-w-72 max-md:hidden max-xl:-top-20 animate-pulse pointer-events-none"
        src="./assets/images/svg/left-stars.svg"
        alt="stars"
      />
      <div className="relative text-center max-w-[295px] mx-auto">
        <img
          className="pointer-events-none w-[118.51px] max-h-[84.41px] absolute -top-10 -right-11 max-lg:-right-6 max-lg:-top-full max-md:max-w-24 max-md:right-6 max-md:-top-[50px] max-sm:right-8"
          src="./assets/images/webp/little-horse-image.webp"
          alt="little horse"
        />
        <Heading text="Our Story" />
      </div>
      <div className="px-5">
        <Description
          myClass="max-w-[1109px] mx-auto text-center pt-[22px] max-lg:pt-4 max-md:pt-2"
          text="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante."
        />
        <Description
          myClass="max-w-[953px] mx-auto text-center"
          text="Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas."
        />
      </div>
    </div>
  );
};

export default OurStory;
