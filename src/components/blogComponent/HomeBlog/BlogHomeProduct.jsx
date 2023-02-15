import React from 'react'

const BlogHomeProduct = (props) => {
    const { title, img } = props.item     
  return (


<div className="card w-72 h-96 bg-base-100 shadow-xl p-2 m-2">
  <figure><img src={img} alt="blog-img-content"  /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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