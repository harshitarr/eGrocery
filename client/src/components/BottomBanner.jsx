import React from 'react';
import bottom from '../assets/bottom_banner_image.png';
import bottoms from '../assets/bottom_banner_image_sm.png'
import { features } from '../assets/assets';

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img src={bottom} alt='bottom_banner' className='w-full hidden md:block' />
      <img src={bottoms} alt='bottom_banner' className='w-full  md:hidden' />

      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 lg:mr-9'>
          <div>
              <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold text-primary mb-6 md:mb-3 lg:mb-6'>
                  Why We Are The Best?
              </h1>
              {features.map((feature,index)=>(
                <div key={index} className='flex items-center gap-4 mt-2'>
                     <img src={feature.icon} alt={feature.title} className='md:w-9 lg:w-11 w-9'/>
                     <div>
                         <h3 className='text-lg md:text-md lg:text-xl font-semibold'>{feature.title}</h3>
                          <p className='text-gray-500/70 text-xs  lg:text-sm'>{feature.description}</p>
                     </div>

                </div>
              ))}
          </div>
      </div>

    </div>
  );
};

export default BottomBanner;
