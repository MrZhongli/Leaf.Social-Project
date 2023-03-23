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
      <h2 className='font-bold text-5xl text-start md:mx-14 lg:mx-14 xl:mx-14  pt-20 text-black'>Categorias</h2>
      <div className='flex flex-wrap justify-center w-full py-20'>
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