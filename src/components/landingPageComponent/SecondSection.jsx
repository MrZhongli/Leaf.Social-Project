import React, { useState } from 'react'
import Tshirt from '../../assets/LEAF-Social_Mediapila.png'
import '../styles/styles.css'

const SecondSection = () => {

  // const [Animation, setAnimation] = useState(false)


  return (
  <div className="hero min-h-screen  " style={{ backgroundColor: `#F1F3F9` }}>
  <div className="hero-content flex-col lg:flex-row" >
    
     <img src={Tshirt} alt="t-shirt" className='slide-right max-sm:w-72 relative right-28' />
    
    <div className='md:w-1/2'>
      <h1 className="text-5xl max-sm:text-4xl font-bold  max-sm:mx-4 mx-10 mt-10 text-left" style={{color:`#1D2433`}}>Compromiso social y ambiental en cada paso</h1>
      <p className="py-6 text-justify max-sm:mx-4 mx-10" style={{color:`#4A505C`}}>Amamos la moda, pero no queremos que nuestros productos se produzcan a costa de las personas o de nuestro planeta.
      Desde el reciclado y la colaboración con ONGs estamos generando valor en nuestros productos</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      {/* <button className="btn btn-primary mx-2">Get Started</button> */}
    </div>
  </div>
</div>  
  )
}

export default SecondSection