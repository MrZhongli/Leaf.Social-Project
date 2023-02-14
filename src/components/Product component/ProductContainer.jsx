import React from 'react'
import { useState ,useEffect } from 'react'
import { Product } from '../blogComponent/data/productData'

const ProductContainer = () => {
    const [item, setItem] = useState([])
    
   useEffect(() => {
    setItem(Product)
    console.log(item)
   }, [])
   
  return (
    <div>
        <h1>ESTAS SON LAS MOCHILAS</h1>
       {item.filter(p=>p.category === 'Mochilas').map(p=> 
       <p>{p.title} </p>)
       
       // <p>{p.title}</p>
       // <img src={p.img} alt="hola"
    } 
    <h1>ESTAS SON LAS ALPARGATAS</h1>
         {item.filter(p=>p.category === 'Alpargatas').map(p=> 
       <p>{p.title} </p>)
        // <p>{p.title}</p>
        // <img src={p.img} alt="hola"
        } 
    </div>
  )
}

export default ProductContainer