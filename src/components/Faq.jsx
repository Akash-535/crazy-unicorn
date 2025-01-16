import React, { useState } from 'react'
import { FAQ_DATA_LIST } from '../utils/helper';
import { FaqArrowIcon } from '../utils/icons';
import Heading from '../common/Heading';

const Faq = () => {
  const [active, setActive] = useState(0);
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div id='faq' className="relative">
      <img className='absolute pointer-events-none right-0 top-20 max-2xl:max-w-96 max-xl:max-w-72 max-md:max-w-[198px] max-md:top-1/4 -z-[1]' src="./assets/images/svg/faq-right-stars.svg" alt="stars" />
      <img className='absolute pointer-events-none left-0 -top-1/4 max-2xl:max-w-60 max-xl:max-w-48 max-md:max-w-[198px] max-md:-bottom-10 -z-[1]' src="./assets/images/svg/faq-left-stars.svg" alt="stars" />
      <div className="container xl:pb-[132px] lg:pb-24 pb-16 mx-auto max-xl:px-5 xl:pt-[103px] md:pt-16 pt-12">
        <div className='relative text-center max-w-[143px] mx-auto'>
          <img className='pointer-events-none max-w-[118px] absolute -top-14 max-lg:-top-14 -right-11 max-lg:-right-10 max-sm:-right-8 max-md:max-w-[90px]' src="./assets/images/webp/little-horse-image.webp" alt="little horse" />
          <Heading text="FAQs" myClass=" text-center mx-auto lg:pb-[88px] md:pb-16 sm:pb-12 pb-10" />
        </div>
        <div className="max-w-[1189px] flex flex-col lg:gap-[35px] gap-4 mx-auto">
          {FAQ_DATA_LIST.map((item, index) => (
            <div className={`rounded-xl`}>
              <div key={index} className={`rounded-xl ! border-none gap-4 transition-all ease-linear duration-500 ${active === index ? '!border-none' : ''}`}>
                <button onClick={() => toggle(index)} className={`flex w-full max-lg:gap-12 uppercase justify-between max-sm:gap-4 bg-transparent  text-left font-medium lg:text-custom-4xl sm:text-3xl text-xl`}>
                  {item.heading}
                  <span className={`transition-all duration-500 ${active === index ? '' : 'rotate-180'} `}><FaqArrowIcon /></span>
                </button>
                <p className={`text-custom-2xl max-sm:text-sm pt-2.5 font-comic overflow-hidden transition-all ease-linear duration-500 max-w-[831px] opacity-0 ${active === index ? "max-h-36 max-sm:max-h-56 opacity-100" : "max-h-0"}`} >{item.description}</p>
                <div className={`transition-all ease-linear duration-500 border-black border-opacity-30 ${active === index ? " border-b-[1px] max-w-[769px] w-full sm:pt-[22px] pt-3 " : "border-none"} `}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq