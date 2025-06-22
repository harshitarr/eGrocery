import React from 'react'
import ProductCard from './ProductCard'

import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const {products} = useAppContext()
  return (
    <div className='mt-16'>
        <p className='text-2xl font-semibold'>Best Sellers</p>
        <div>
           <ProductCard product={products[0]} />
        </div>
    </div>
  )
}

export default BestSeller