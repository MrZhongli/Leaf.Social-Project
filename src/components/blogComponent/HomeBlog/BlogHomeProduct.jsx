import React from 'react'

const BlogHomeProduct = (props) => {
    const { title, img } = props.item     
  return (
    <div className="card bg-white shadow-xl">
    <figure><img src={img} alt="blog-img-content" className='w-72 h-72'/></figure>
    <div className="card-body">
      <h2 className="card-title text-left">
        
      {title}
   
      </h2>
      <p className='text-left font-light text-stone-500'> texto relleno texto relleno texto relleno texto relleno texto relleno texto relleno texto relleno texto relleno</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Leer Mas</div> 
        {/* <div className="badge badge-outline">Products</div> */}
      </div>
    </div>
  </div>
  )
}

export default BlogHomeProduct