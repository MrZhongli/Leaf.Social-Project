import React, { useEffect, useState } from 'react'
import { getItemData } from '../BlogItem'
import BlogHomeProduct from './BlogHomeProduct'

const HomeBlogCard = () => {

  const [Blog, setBlog] = useState([])

  useEffect(() => {
    getItemData().then((props) => {
      setBlog(props)
    })
  }, [])

  return (
    <div className="hero  bg-white">
        <div className="hero-content w-full text-center">
            <div className='m-10'>
            <h1 className="text-5xl font-bold text-black mb-10">Nuestro blog</h1>
            <p className='text-sm font-light text-stone-500  '>Si tiene alguna pregunta o comentario, no dude en comunicarse con nosotros.</p>
            <p className='text-sm font-light text-stone-500  mb-20'>Siempre estamos disponibles para ayudar.</p>
            <div className='flex flex-wrap'>
              {Blog.map(p =>
                <BlogHomeProduct key={p.id} item={p}  />
              )}
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBlogCard