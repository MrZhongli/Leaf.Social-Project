import React from 'react'
import { useState ,useEffect } from 'react'
import { Product } from '../blogComponent/data/productData'
import ProductItems from './ProductItems'

const ProductContainer = () => {
    const [item, setItem] = useState([])
    
   useEffect(() => {
    setItem(Product)
    console.log(item)
   }, [])
   

  return (
    <div className='bg-white'>
      <div className='flex flex-col justify-start w-full'>
    {/* Echomochila */}
        <h1 className='text-black text-4xl text-left mx-44 mt-20'>Ecomochilas</h1>
    <div className='flex flex-wrap justify-center'>
        {item.filter(p => p.category === 'Mochilas').map(p =>
          <ProductItems item={p} />
          )
        }
    </div>
          {/* Alpargatas */}
        <h1 className='text-black text-4xl text-left mx-44 mt-20'>Alpargatas</h1>
        <div className='flex flex-wrap justify-center'>
        {item.filter(p => p.category === 'Alpargatas').map(p =>
          <ProductItems item={p} />)
        }
        </div>
        
        {/* zapatillas */}
        <h1 className='text-black text-4xl text-left mx-44 mt-20 '>Zapatillas</h1>
        <div className='flex flex-wrap justify-center'>
        {item.filter(p => p.category === 'Zapatillas').map(p =>
          <ProductItems item={p} />)
        }
        </div>

      </div>
    </div>
  )
}

export default ProductContainer