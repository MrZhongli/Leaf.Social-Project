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
    <div className="hero  bg-white ">
        
            <div className='flex flex-col justify-center align-center w-full text-center mb-10 mt-32 flex-wrap '>
            <h1 className="text-5xl max-sm:text-4xl  font-bold text-black mb-10">Nuestro blog</h1>
            <p className='text-md max-sm:text-sm font-light ' style={{color:`#5C5C5C`}}>Si tiene alguna pregunta o comentario, no dude en comunicarse con nosotros.</p>
            <p className='text-md font-light max-sm:text-sm  mb-20' style={{color:`#5C5C5C`}}>Siempre estamos disponibles para ayudar.</p>
            <div className='flex flex-wrap'>
              {Blog.map(p =>
                <BlogHomeProduct key={p.id} item={p}  />
              )}
            </div>
            </div>
        
    </div>
  )
}

export default HomeBlogCard