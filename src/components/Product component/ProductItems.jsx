import React from 'react'
import { Link } from 'react-router-dom'

const ProductItems = (props) => {
  const { title, img , slug} = props.item

  return (
    <>
    <Link to={`/Productos/${slug}`} className="btn-ghost">
    <div className="card card-compact bg-white mx-10 my-10 ">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
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