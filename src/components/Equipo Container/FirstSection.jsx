import React from 'react'
// import Shoes from '../../assets/Shoes-img.png'
import '../styles/styles.css'

const FirstSection = () => {
  return (
    <>
      <div className='absolute top-1/3  flex flex-col sm:left-32 max-sm:left-10 ' >
        <h1 className="text-5xl font-bold text-white text-left max-sm:text-4xl" >Trasformamos desperdicios en productos innovadores.</h1>
        <p className="py-6 text-xl text-white  text-left max-sm:text-md ">Transformamos los descartes industriales en ecoproductos que resuelven las necesidades de packaging y merchandasing de grandes empresas. Comunicando valores vinculados al cuidado y preservación del medio ambiente.</p>
      </div>
    <div className="bg-black">
      <div className="hero min-h-screen snap-center bg-hero-us justify-end align-items-start">
        <div className="hero-content flex  lg:flex-row-reverse ">
          <div className='w-1/2'>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FirstSection