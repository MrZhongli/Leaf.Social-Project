import React from 'react'
import Rectangle from '../../assets/Others/Rectangle'
// import chica from '../../assets/chica_1.png'

const SecondSection = () => {
  return (


    <div className="hero min-h-screen  snap-end " style={{ backgroundColor: `#F1F3F9` }}>
  <div className="hero-content flex-col lg:flex-row" >
    <div >
      <Rectangle className="relative right-40 "  />
      {/* resolver esto */}
      <div className="">
      
      </div>
    </div>
    <div>
      <h1 className="text-5xl font-bold text-stone-700">Compromiso social y ambiental en cada paso</h1>
      <p className="py-6">Amamos la moda, pero no queremos que nuestros productos se produzcan a costa de las personas o de nuestro planeta.
      Desde el reciclado y la colaboración con ONGs estamos generando valor en nuestros productos</p>
      <button className="btn btn-primary mx-2">Get Started</button>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>  
  )
}

export default SecondSection