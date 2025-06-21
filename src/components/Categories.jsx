import React from 'react'
import fruits from '../assets/1.png'

const Categories = () => {
  return (
    <div className='mt-16'>
        <p className='text-2xl  font-semibold'>Categories</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-xols-7 mt-6 gap-6'>
            <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
                <img src={fruits} alt="fruits" className='group-hover:scale-108 transition max-w-28 border'/>
                <p className='text-sm font-medium'>fruit</p>
            </div>

        </div>
    </div>
  )
}

export default Categories