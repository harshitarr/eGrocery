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
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4'>
        <h1 className='text-2xl md:text-4xl font-semibold text-black mb-6'>
          Get everything you need without stepping outside
        </h1>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          {/* Mobile Button */}
          <Link 
            to='/products' 
            className='group flex items-center bg-green-600 justify-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'
          > 
            Shop Now 
            <FaRegArrowAltCircleRight className='text-white transition group-hover:translate-x-1' />
          </Link>

          {/* Desktop Button */}
          <Link 
            to='/products' 
            className='group hidden md:flex bg-gray-400 items-center gap-2 px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'
          > 
            Explore Deals
            <FaRegArrowAltCircleRight className='text-white transition group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
