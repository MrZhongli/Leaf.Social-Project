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
        {/* <h1 className=' text-4xl text-left max-sm:mx-10 mx-44 mt-20  color_primary'>Ecomochilas</h1>
        <div className='flex flex-wrap justify-center'>
          {item.filter(p => p.category === 'Mochilas').map(p =>
            <ProductItems item={p} />
          )
          }
        </div>

        <h1 className='text-black text-4xl text-left max-sm:mx-10 mx-44 mt-20 color_primary'>Alpargatas</h1>
        <div className='flex flex-wrap justify-center'>
          {item.filter(p => p.category === 'Alpargatas').map(p =>
            <ProductItems item={p} />)
          }
        </div>


        <h1 className='text-black text-4xl text-left max-sm:mx-10 mx-44 mt-20 color_primary'>Zapatillas</h1>
        <div className='flex flex-wrap justify-center'>
          {item.filter(p => p.category === 'Zapatillas').map(p =>
            <ProductItems item={p} />)
          }
        </div> */}

      </div>
    </div>
  )
}

export default ProductContainer