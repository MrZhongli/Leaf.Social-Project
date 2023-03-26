import React from 'react'
import '../styles/styles.css'

const MainSection = () => {
  return (
    <>
    <div className='absolute  top-1/3 mt-24 flex flex-col sm:left-32 max-sm:left-10'>
        <h1 className="text-5xl font-bold text-white text-left text-focus-in " >Productos con propositos</h1>
        <p className="py-6 text-xl text-white  text-left text-focus-in">Vestirse bien puede ser un acto de consciencia social y ambiental</p>
      </div>
      <div className="hero min-h-screen snap-center bg-hero-product justify-start align-items-start" >
        <div className="hero-content flex  lg:flex-row-reverse ">
          <div className='w-1/2'>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection