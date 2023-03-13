import React, { useState } from 'react'
import Tshirt from '../../assets/LEAF-Social_Mediapila.png'
import '../styles/styles.css'
import LazyLoad from 'react-lazy-load';

const SecondSection = () => {
  return (
  <div className="md:hero lg:hero xl:hero min-h-screen  " style={{ backgroundColor: `#F1F3F9` }}>
  <div className="md:hero-content xl:hero-content lg:hero-content flex-col lg:flex-row" >
     {/* <img src={Tshirt} alt="t-shirt" className=' relative max-sm:py-10' /> */}
     <LazyLoad 
     className=' relative max-sm:py-10'>
      <img src={Tshirt} />
    </LazyLoad>

    <div className='md:w-1/2'>
      <h1 className="text-5xl max-sm:text-4xl font-bold  max-sm:mx-4 mx-10  text-left mb-10" style={{color:`#1D2433`}}>Compromiso social y ambiental en cada paso</h1>
      <p className="py-6 text-justify max-sm:mx-4 mx-10" style={{color:`#4A505C`}}>Amamos la moda, pero no queremos que nuestros productos se produzcan a costa de las personas o de nuestro planeta.
      Desde el reciclado y la colaboración con ONGs estamos generando valor en nuestros productos</p>
    </div>
  </div>
</div>  
  )
}
export default SecondSection