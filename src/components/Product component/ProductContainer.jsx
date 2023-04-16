import React from 'react'
import { useState ,useEffect } from 'react'
import { Product } from '../blogComponent/data/productData'
import ProductItems from './ProductItems'

const ProductContainer = () => {
    const [item, setItem] = useState([])
    // const [itemResponsive, setItemResponsive] = useState([])
    // const itemMas = []

    // for (let i = 0; i < 4; i++) {
    //   itemMas.push(Product[i])
    // }
    
   useEffect(() => {
    setItem(Product)
    // setItemResponsive(itemMas)
  }, [])

  return (
    <div className='bg-white'>
      <h2 className='font-bold text-5xl text-start md:mx-14 lg:mx-14 xl:mx-28 pt-48 text-black max-sm:text-center'>Categorías</h2>
      <div className=' md:grid md:grid-cols-3 justify-center w-full pt-32'>
    {
      item.map(p=>
        <ProductItems item={p} />
        )
    }
    
      </div>
      {/* <div className='md:hidden mt-20'>
        {
          itemResponsive.map(iResp =>
            <ProductItems item={iResp} />
          )
        }
      </div> */}
    <p style={{color:`#4A505C`}} className='text-center mx-10 py-20'>¿Te gustaron nuestros productos y querés ser cliente mayorista? Comunicate con nosotros a <span className='text-red-500'> mayorista@leaf.social</span></p>
    </div>
  )
}

export default ProductContainer