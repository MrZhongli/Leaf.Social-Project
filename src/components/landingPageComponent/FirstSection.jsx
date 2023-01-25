import React from 'react'
// import Shoes from '../../assets/Shoes-img.png'
import '../styles/styles.css'

const FirstSection = () => {
  return (
    <div className="hero min-h-screen snap-center bg-hero justify-start align-items-start">
      <div className="hero-content flex  lg:flex-row-reverse ">
        {/* <img src={Shoes} className=" " alt="there is a img"/> */}
        <div>
          <h1 className="text-5xl font-bold text-black">Productos con propositos</h1>
          <p className="py-6  text-xl text-slate-500">Vestirse bien puede ser un acto de consciencia social y ambiental</p>
          <button className="btn bg-orange-600 text-white mx-2">Contactanos</button>
          <button className="btn bg-orange-600 text-white">Ver productos</button>
        </div>
      </div>
    </div>
  )
}

export default FirstSection