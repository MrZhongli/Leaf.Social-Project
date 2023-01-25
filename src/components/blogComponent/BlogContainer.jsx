import React, { useEffect, useState } from 'react'
import { getItemData } from './BlogItem';
import BlogProduct from './BlogProduct';
import './style.css'

const BlogContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItemData().then((props) => {
      setProduct(props)
    })
  }, [])

  return (
    <div className='text-5xl'>
      <div className='flex flex-col w-full  product-container'>
        {product.map(p =>
          <BlogProduct key={p.id} product={p} />
        )}
      </div>
    </div>
  )
}

export default BlogContainer