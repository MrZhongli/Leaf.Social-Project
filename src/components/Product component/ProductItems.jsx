import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const ProductItems = (props) => {
  const { title, img , slug} = props.item
    
  
  return (
    <>
    <Link to={`/Productos/${slug}`} >
    <div className="card md:w-96 h-96 card-compact bg-white mx-5 hover:scale-105 duration-150">
      <figure><img src={img[0]} className="card max-sm:w-72" alt="Shoes" /></figure>
      <div className="card-body  ">
        <h2 className="card-title text-stone-600 relative bottom-16  p-3 max-sm:text-sm">{title}</h2>
      </div>
    </div>
    </Link>
    </>
  )
}

export default ProductItems