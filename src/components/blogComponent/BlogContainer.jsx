import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBarTwo';
import { getItemData } from './BlogItem';
import BlogProduct from './BlogProduct';
import CarouselBlog from './CarouselBlog';

const BlogContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItemData().then((props) => {
      setProduct(props)
    })
  }, [])

  return (
    <>
    <Navbar/>
    <div className='text-5xl bg-white'>
      <CarouselBlog/>
      <div className='flex flex-col '>
        {product.map(p =>
          <BlogProduct key={p.id} product={p}  />
        )}
      </div>
    </div>
    </>
  )
}

export default BlogContainer