

import React from "react";
import { Link } from "react-router-dom";


const BlogProduct = (props) => {
  const { title, id, img, content } = props.product
  //
  return (
    <>
      
      <div className="card rounded-none flex  lg:card-side bg-slate-100 shadow-xl ms-5 mt-20 mb-20 max-w-max md:w-1/2 m-auto ">
        <figure><img src={img} alt="Album" className="h-96 lg:w-screen" /></figure>
          
        <div className="card-body flex divide-y">
          <h2 className="card-title text-left text-black">{title}</h2>
          <p className="text-sm max-w-full text-left my-2 py-2 text-black">{content}</p>
          <div>

          <div className="flex justify-start absolute">
            <p className="text-sm my-5 py-2 text-left mx-2">Views</p>
            <p className="text-sm my-5 py-2 text-left">Likes</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/blog/${id}`} className='btn  btn-primary  hover:bg-blue-600 btn-success my-4'> Ver mas</Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogProduct;