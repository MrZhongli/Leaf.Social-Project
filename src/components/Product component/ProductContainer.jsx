import React from 'react'
import { useState ,useEffect } from 'react'
import { Product } from '../blogComponent/data/productData'
import ProductItems from './ProductItems'

const ProductContainer = () => {
    const [item, setItem] = useState([])
    
   useEffect(() => {
    setItem(Product)
   }, [])
   

  return (
    <div className='bg-white'>
      <h2 className='font-bold text-5xl text-start md:mx-14 lg:mx-14 xl:mx-28 pt-48 text-black'>Categorias</h2>
      <div className='flex flex-wrap justify-center w-full py-32'>
    {
      item.map(p=>
        <ProductItems item={p} />
        )
    }
    <p style={{color:`#4A505C`}}>¿Te gustaron nuestros productos y querés ser cliente mayorista? Comunicate con nosotros a <span className='text-red-500'> mayorista@leaf.social</span></p>
      </div>
    </div>
  )
}

export default ProductContainer