import React from "react";
import Heading from "../common/Heading";
import { TEAM_LIST } from "../utils/helper";
import rightLottie from "../lottie/right-stars.json";
import Lottie from "lottie-react";

const Team = () => {
  return (
    <div id="team" className="relative">
      <Lottie
        className="absolute pointer-events-none right-0 -top-2/3 max-2xl:-top-1/3 max-2xl:max-w-96 max-xl:max-w-72 max-md:max-w-[198px] max-md:top-1/4 -z-[1] max-md:hidden"
        animationData={rightLottie}
      />
      <div className="container max-w-[1358px] xl:pb-[103px] md:pb-16 pb-12 mx-auto max-xl:px-4">
        <div className="relative text-center lg:max-w-[157px] max-w-[120px] mx-auto">
          <img
            className="max-w-[118px] pointer-events-auto absolute -top-11 max-lg:-top-14 -right-14 max-lg:-right-20 max-sm:-right-8 max-md:-top-16"
            src="./assets/images/webp/little-horse-image.webp"
            alt="little horse"
          />
          <Heading
            text="Team"
            myClass=" text-center mx-auto pb-[88px] max-xl:pb-16 max-md:pb-14 max-sm:pb-[45px]"
          />
        </div>
        <div className="flex items- justify-center gap-6 flex-wrap">
          {TEAM_LIST.map((obj, i) => (
            <div
              data-aos="zoom-out-down"
              key={i}
              className="bg-gradient-to-r from-[#B62AFF80] to-[#FF0DF280] p-[1px] rounded-[25px] hover:scale-y-[1.07] group duration-300 ease-linear max-xl:max-w-[380px] hover:translate-y-[-20px] max-xl:hover:translate-y-0"
            >
              <div className="bg-smoke-white px-14 pb-5 rounded-[25px] h-full w-full">
                <img
                  className="-translate-y-[36px] w-full -mb-4 group-hover:scale-110 group-hover:translate-y-[-50px] duration-300 ease-linear pointer-events-none max-lg:group-hover:translate-y-[-20px] max-lg:max-w-[200px]"
                  src={obj.image}
                  alt="team member"
                />
                <p className="text-custom-4xl max-md:text-3xl max-sm:text-2xl text-center sm:pb-3 pb-1">
                  {obj.heading}{" "}
                </p>
                <p className="text-custom-2xl max-sm:text-lg font-comic text-center">
                  {obj.description}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
