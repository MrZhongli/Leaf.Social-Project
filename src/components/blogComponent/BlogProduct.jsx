

import React from "react";
import { Link } from "react-router-dom";

const BlogProduct = (props) => {
  const { title, id, img, content } = props.product
  //
  return (
    <>
    
    <div className="card lg:card-side bg-base-100 shadow-xl ms-5 mt-20 mb-20 max-w-max w-1/2 ">
  <figure><img src={img} alt="Album" className="h-96 w-screen"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-sm max-w-full">{content}</p>
    <div className="card-actions justify-end">
      
      <Link to={`/blog/${id}`} className='btn  btn-primary  hover:bg-blue-600 btn-success my-4'> Ver mas</Link>
    </div>
  </div>
</div>
    </>
  );
}

export default BlogProduct;