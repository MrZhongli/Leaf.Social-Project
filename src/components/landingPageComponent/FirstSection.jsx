import React from 'react'
// import Shoes from '../../assets/Shoes-img.png'
import '../styles/styles.css'

const FirstSection = () => {
  return (
    <>
      <div className='absolute top-1/3 mt-24 flex flex-col left-32 max-sm:left-0'>
        <h1 className="text-6xl font-bold text-white text-left  max-sm:text-5xl max-sm:mx-5" >Productos con propositos</h1>
        <p className="py-6 text-xl text-white  text-left   max-sm:mx-5">Vestirse bien puede ser un acto de consciencia social y ambiental</p>
      </div>
      <div className='bg-black'>
        <div className="hero min-h-screen snap-center bg-hero justify-start align-items-start">
          <div className="hero-content flex  lg:flex-row-reverse  ">
            <div className='w-1/2'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection