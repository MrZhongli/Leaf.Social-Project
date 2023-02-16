import React from 'react'
import { Link } from 'react-router-dom'

const ProductItems = (props) => {
  const { title, id, img , slug} = props.item

  // const {title, img} = props

  // const 
    
  return (
    <div className="card card-compact bg-white mx-10 my-10 ">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <Link to={`/Productos/${slug}`} className="btn btn-primary">ver</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItems