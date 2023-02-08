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
      <h1 className="text-5xl font-bold text-stone-700 mx-10 text-left">Compromiso social y ambiental en cada paso</h1>
      <p className="py-6 text-justify mx-10">Amamos la moda, pero no queremos que nuestros productos se produzcan a costa de las personas o de nuestro planeta.
      Desde el reciclado y la colaboración con ONGs estamos generando valor en nuestros productos</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      {/* <button className="btn btn-primary mx-2">Get Started</button> */}
    </div>
  </div>
</div>  
  )
}

export default SecondSection