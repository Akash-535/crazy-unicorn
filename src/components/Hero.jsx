import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-no-repeat bg-cover min-h-[1085px] relative'>
      <img className='absolute bottom-0 left-0' src="./assets/images/hero-clouds.webp" alt="" />
     <Header/>
     <div className='relative pt-[165px]'>
            <div className='max-w-[1265px] mx-auto'>
        <img className='max-w-[1264px] w-full' src="./assets/images/hero-image.webp" alt="hero rainbow" />
        <img className='max-w-[600px] absolute top-[52%] left-1/2 -translate-x-1/2' src="./assets/images/hero-horse-img.webp" alt="horse img" />
      </div>
     </div>
    </div>
  )
}

export default Hero