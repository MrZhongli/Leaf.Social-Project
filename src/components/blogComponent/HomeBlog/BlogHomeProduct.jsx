import React from 'react'
import { Link } from 'react-router-dom'

const BlogHomeProduct = (props) => {
    const { title, img, slug, secondContent  } = props.item     
  return (



<div className="card w-72 h-96 bg-white mx-10 shadow-xl p-2 m-2">
  <figure><img src={img} alt="blog-img-content"  /></figure>
  <div className="card-body">
    <h2 className="card-title text-left text-sm" style={{color:`#1D2433`}}>{title}</h2>
    <p className='text-sm text-justify' style={{color:`#4A505C`}}> {secondContent}</p>
    <div className="card-actions justify-start">
    <Link to={`/blog/${slug}`} className="text-black mt-2">Leer mas</Link>
    </div>
  </div>
</div>


  //   <div className="card bg-white shadow-xl">
  //   <figure><img src={img} alt="blog-img-content" className='w-72 h-72'/></figure>
  //   <div className="card-body">
  //     <h2 className="card-title text-left">
        
  //     {title}
   
  //     </h2>
  //     <p className='text-left font-light text-stone-500'> texto relleno texto relleno texto relleno texto relleno texto relleno texto relleno texto relleno texto relleno</p>
  //     <div className="card-actions justify-end">
  //       <div className="badge badge-outline">Leer Mas</div> 
  //       {/* <div className="badge badge-outline">Products</div> */}
  //     </div>
  //   </div>
  // </div>
  )
}

export default BlogHomeProduct