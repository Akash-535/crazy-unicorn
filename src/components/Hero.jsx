import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className='relative'>
      <img className='absolute left-0 top-[20%] max-2xl:max-w-96 max-xl:max-w-72 max-md:hidden pointer-events-none' src="./assets/images/svg/hero-left-stars.svg" alt="stars" />
      <img className='absolute right-0 bottom-10 max-2xl:max-w-96 max-xl:max-w-72 max-md:hidden pointer-events-none' src="./assets/images/svg/hero-right-stars.svg" alt="stars" />
     <Header/>
     <div className='relative pt-[165px] max-2xl:pt-24 max-xl:pt-16 max-lg:pt-0'>
            <div className='max-w-[1304px] mx-auto max-2xl:max-w-[1000px] max-xl:max-w-[750px] max-lg:max-w-[550px] px-5'>
        <img className='w-full pointer-events-none' src="./assets/images/webp/hero-image.webp" alt="hero rainbow" />
        <img className='max-w-[600px] absolute top-[52%] left-1/2 -translate-x-1/2 max-2xl:max-w-[490px] max-2xl:top-[48%] w-full max-xl:max-w-[370px] max-lg:max-w-[260px] max-lg:top-[40%] max-[524px]:max-w-[166px] pointer-events-none' src="./assets/images/webp/hero-horse-img.webp" alt="horse img" />
      </div>
     </div>
    </div>
  )
}

export default Hero