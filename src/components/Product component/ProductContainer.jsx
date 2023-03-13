import React from 'react'
import { useState ,useEffect } from 'react'
import { Product } from '../blogComponent/data/productData'
import ProductItems from './ProductItems'

const ProductContainer = () => {
    const [item, setItem] = useState([])
    
   useEffect(() => {
    setItem(Product)
    // console.log(item)
   }, [])
   

  return (
    <div className='bg-white'>
      <div className='flex flex-wrap justify-start w-full'>
    {
      item.map(p=>
        <ProductItems item={p} />
        )
    }
      </div>
    </div>
  )
}

export default ProductContainer