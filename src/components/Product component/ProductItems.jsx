import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const ProductItems = (props) => {
  const { title, img , slug} = props.item

  return (
    <>
    <Link to={`/Productos/${slug}`} >
    <div className="card md:w-96 h-96 card-compact bg-white mx-10 my-10 navbar_link hover:scale-105 duration-150">
      <figure><img src={img[0]} className="navbar_link" alt="Shoes" /></figure>
      <div className="card-body  ">
        <h2 className="card-title text-black">{title}</h2>
        <p></p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
    </Link>
    </>
  )
}

export default ProductItems