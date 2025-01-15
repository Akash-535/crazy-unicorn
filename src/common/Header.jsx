import React, { useEffect, useState } from 'react'
import { HEADER_LIST, SOCIAL_MEDIA_LIST } from '../utils/helper';

const Header = () => {
    const [showSlide, setShowSlide] = useState(false);
    const toggleSidebar = () => setShowSlide(!showSlide);
    const closeNavbar = () => {
        setShowSlide(false);
    };
    useEffect(() => {
        document.body.style.overflow = showSlide ? 'hidden' : 'auto';
    }, [showSlide]);
    return (
        <div className='overflow-hidden mx-auto px-5'>
            <div className='container flex justify-between items-center'>
                <a href="#"><img className='max-w-[85px]' src="./assets/images/logo.webp" alt="" /></a>
                <div className={`flex gap-[30px] max-lg:gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-pink-400 duration-300 ease-linear z-10 ${showSlide ? 'max-lg:left-0' : 'max-lg:left-full'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <ul key={i}>
                            <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:-bottom-3 after:h-2 after:left-0 after:bg-header-line after:bg-cover after:bg-center after:max-w-16'>
                                <a onClick={closeNavbar} href={obj.link} className=' text-base font-bold text-custom-2xl'>{obj.item}</a>
                            </li>
                        </ul>
                    ))}
                       <div className='lg:hidden flex gap-5'>
                {SOCIAL_MEDIA_LIST.map((obj , i)=> (
                    <a key={i} href={obj.link} className='hover:scale-110 duration-300'>{obj.icon}</a>
                ))}
               </div>
                </div>
               <div className='flex gap-5 max-lg:hidden'>
                {SOCIAL_MEDIA_LIST.map((obj , i)=> (
                    <a key={i} href={obj.link} className='hover:scale-110 duration-300'>{obj.icon}</a>
                ))}
               </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                    <span className={`${showSlide ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${showSlide ? 'w-8 h-1 bg-white -translate-x-10 opacity-0 duration-300 ease-linear' : 'w-8 h-1 bg-white duration-700 ease-linear rounded'}`}></span>
                    <span className={`${showSlide ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header
