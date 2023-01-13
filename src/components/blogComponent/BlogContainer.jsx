import React, { useEffect, useState } from 'react'
import { getItemData } from './BlogItem';
import BlogProduct from './BlogProduct';

const BlogContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItemData().then((props) => {
      setProduct(props)
    })
  }, [])

  return (
    <div className='text-5xl  '>
      <div className='flex flex-wrap m-auto sm:flex-col md:flex-row'>
        {product.map(p =>
          <BlogProduct key={p.id} product={p} />
        )}
      </div>
    </div>
  )
}

export default BlogContainer