import React from 'react'
import ProductCard from './ProductCard'

import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const {products} = useAppContext()
  return (
    <div className='mt-16'>
        <p className='text-2xl font-semibold'>Best Sellers</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5'>
           {products.filter((product)=>product.inStock).slice(13,18).map((product,index)=>(
            <ProductCard key={index} product={product}/>
           ))}
        </div>
    </div>
  )
}

export default BestSeller