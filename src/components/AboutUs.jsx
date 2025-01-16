import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const AboutUs = () => {
  return (
    <div id='about' className='pt-28 px-5 max-lg:pt-24 max-md:pt-20 max-sm:pt-16 relative'>
        <img className='absolute -bottom-1/2 left-0 max-2xl:max-w-96 max-xl:max-w-72 max-md:hidden max-xl:bottom-0 -z-[1]' src="./assets/images/svg/about-left-stars.svg" alt="stars" />
        <img className='absolute right-0 -top-1/2 max-2xl:max-w-96 max-xl:max-w-72 max-md:hidden max-xl:-top-4 -z-[1]' src="./assets/images/svg/about-stars.svg" alt="stars" />
      <div className="container">
        <div className='flex items-center gap-[83px] max-2xl:gap-14 justify-center max-xl:flex-wrap-reverse max-xl:gap-9 max-md:gap-5'>
          <img className='max-w-[661px] w-full max-2xl:max-w-[590px] max-xl:max-w-[540px] max-lg:max-w-md max-md:max-w-sm max-sm:max-w-xs' src="./assets/images/webp/about-us-img.webp" alt="about us image" />
          <div className='max-xl:flex flex-col justify-center items-center'>
          <div className='relative text-center max-w-[295px] max-xl:mx-auto'>
        <img className='max-w-[118px] absolute -top-12 -right-11 max-lg:-right-6 max-lg:-top-full max-md:max-w-24 max-md:right-6 max-md:-top-[50px] max-sm:-right-8' src="./assets/images/webp/little-horse-image.webp" alt="little horse" />
        <Heading text="About Us"/>
      </div>
      <Description myClass="max-w-[576px] max-xl:max-w-none max-xl:mx-auto max-xl:text-center max-xl:pt-2" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. "/>
        <Description myClass="max-w-[576px] pt-2.5 max-xl:max-w-none max-xl:mx-auto max-xl:text-center" text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris."/>
        <div className='bg-gradient-to-l from-pink-dark to-neon-pink max-w-[234px] rounded-xl mt-14 max-xl:mt-10 max-lg:mt-7 max-md:mt-4 max-md:max-w-[190px]'>
          <button className='bg-white py-4 px-12 border-[0.5px] border-black rounded-xl -translate-x-1.5 -translate-y-1.5 hover:translate-x-0 hover:translate-y-0 duration-300 ease-linear max-md:px-6 max-md:py-2'><span className='bg-gradient-to-r from-pink-dark to-neon-pink bg-clip-text text-transparent text-custom-3xl font-normal leading-custom-lg'>Mint Now</span></button>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs