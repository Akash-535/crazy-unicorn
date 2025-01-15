import React, { useEffect, useState } from 'react'
import { HEADER_LIST } from '../utils/helper';
import { LogoIcon } from '../utils/icons';
import CustomButton from './CustomButton';

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
        <div className='pt-3.5 overflow-hidden min-[1921px]:max-w-[1920px] mx-auto px-5'>
            <div className='container flex justify-between items-center'>
                <a href="#"><LogoIcon/></a>
                <div className={`flex gap-10 max-lg:gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-black duration-300 ease-linear z-10 ${showSlide ? 'max-lg:left-0' : 'max-lg:left-full'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <ul key={i}>
                            <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:left-0 after:bg-white pb-0.5'>
                                <a onClick={closeNavbar} href={obj.link} className=' text-base font-bold text-white'>{obj.item}</a>
                            </li>
                        </ul>
                    ))}
                    <CustomButton text="Connect Wallet" myClass="lg:hidden bg-white !font-bold !text-black border border-transparent hover:text-white hover:bg-transparent hover:border-white"/>
                </div>
                <CustomButton text="Connect Wallet" myClass="max-lg:hidden bg-white !font-bold !text-black border border-transparent hover:text-white hover:bg-transparent hover:border-white"/>
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
