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
    <div id='faq' className="bg-faq-bg-img bg-no-repeat bg-cover bg-center">
      <div className="container xl:pb-[132px] lg:pb-24 pb-16 mx-auto max-xl:px-4 xl:pt-[103px] md:pt-16 pt-12">
        <Heading text="FAQs" myClass=" text-center mx-auto pb-[88px]" />
        <div className="max-w-[1189px] flex flex-col lg:gap-[35px] gap-4 mx-auto">
          {FAQ_DATA_LIST.map((item, index) => (
            <div className={`rounded-xl`}>
              <div key={index} className={`rounded-xl ! border-none gap-4 transition-all ease-linear duration-500 ${active === index ? '!border-none' : ''}`}>
                <button onClick={() => toggle(index)} className={`flex w-full uppercase justify-between max-sm:gap-4 bg-transparent items-center text-left font-medium lg:text-custom-4xl sm:text-3xl text-xl`}>
                  {item.heading}
                  <span className={`transition-all duration-500 ${active === index ? 'rotate-180' : ''} `}><FaqArrowIcon /></span>
                </button>
                <p className={`text-custom-2xl max-sm:text-sm pt-2.5 font-comic overflow-hidden transition-all ease-linear duration-500 max-w-[831px] ${active === index ? "max-h-36 max-sm:max-h-56" : "max-h-0"}`} >{item.description}</p>
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