import React from 'react';
import mainbanner from '../assets/main_banner_bg.png';
import mainbannersm from '../assets/main_banner_bg_sm.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className='relative'>
      {/* Responsive Banner Images */}
      <img src={mainbanner} alt="banner" className='w-full hidden md:block' />
      <img src={mainbannersm} alt="banner" className='w-full md:hidden' />

      {/* Banner Content */}
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 text-center md:text-left'>
        <h1 className='text-3xl sm:font-bold  md:text-3xl lg:text-5xl font-bold md:font-bold text-black leading-tight max-w-72 md:max-w-80 lg:max-w-105'>
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        {/* Buttons */}
      <div className='flex flex-col md:flex-row gap-4 mt-6 font-medium items-center md:items-start justify-center md:justify-start'>
        {/* Shop Now - Always visible */}
        <Link 
          to='/products' 
          className='group flex items-center justify-center gap-2 px-7 py-3 text-base md:px-6 md:py-2.5 md:text-sm lg:px-9 lg:py-3 lg:text-base bg-[#50b592] hover:bg-primary-dull transition rounded text-white cursor-pointer'
        > 
          Shop Now 
          <FaRegArrowAltCircleRight className='text-white transition group-hover:translate-x-1' />
        </Link>

        {/* Explore Deals - Visible on md and up */}
        <Link 
          to='/products' 
          className='group hidden md:flex items-center gap-2 px-7 py-3 text-sm md:px-6 md:py-2.5 md:text-sm lg:px-9 lg:py-3 lg:text-base border border-[#50b592] text-[#50b592] hover:bg-transparent transition rounded cursor-pointer'
        > 
          Explore Deals
          <FaRegArrowAltCircleRight className='transition group-hover:translate-x-1 text-[#50b592]' />
        </Link>
      </div>

      </div>
    </div>
  );
};

export default MainBanner;
