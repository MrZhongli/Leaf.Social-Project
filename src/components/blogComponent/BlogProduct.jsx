

import React from "react";
import { Link } from "react-router-dom";

const BlogProduct = (props) => {
  const { title, id, img, content, slug } = props.product
  const currentUrl = `https://leaf-social-project.vercel.app/blog/${id}`
  //
  return (
    <>
      <Link to={`/blog/${slug}`}>
        <div className="card w-96 max-sm:w-72  h-5/6 rounded-none m-5  bg-white shadow-xl">
          <figure><img src={img} alt="imagen-blog " className="w-full h-48" /></figure>
          <div className="card-body">
            <h2 className="text-lg font-bold text-left text-black">{title} </h2>
            <p className="text-sm max-w-full text-left my-2 py-2  h-48 text-black">{content}</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogProduct;