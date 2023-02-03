import React, { useEffect, useState } from 'react'
import { getItemData } from '../BlogItem'
import BlogHomeProduct from './BlogHomeProduct'

const HomeBlogCard = () => {

  const [Blog, setBlog] = useState()

  useEffect(() => {
    getItemData().then((props) => {
      setBlog(props)
    })
  }, [])

  return (
    <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold text-black">Nuestro Blog encontraras</h1>
            <div className='flex h-96 '>
              {Blog.map(p =>
                <BlogHomeProduct key={p.id} descripction={p}  />
              )}
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBlogCard