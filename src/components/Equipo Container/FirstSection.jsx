import React from 'react'
// import Shoes from '../../assets/Shoes-img.png'
import '../styles/styles.css'
import bg1 from '../../assets/nosotros_section/bg-main.jpg'
import bg2 from '../../assets/nosotros_section/bg-main-2.jpg'
import bg3 from '../../assets/nosotros_section/bg-main-3.jpg'

import bg1res from '../../assets/nosotros_section/banner_responsive/us_responsive_1.png'
import bg2res from '../../assets/nosotros_section/banner_responsive/us_responsive_2.png'
import bg3res from '../../assets/nosotros_section/banner_responsive/us_responsive_3.png'

const FirstSection = () => {
  return (
    <>
      <div className='absolute top-1/3  flex flex-col  ' >
        <h1 className="text-5xl font-bold text-white text-center max-sm:text-4xl text-focus-in m-auto md:w-2/3 z-10" >Transformamos desperdicios en productos innovadores.</h1>
        <p className="py-6 text-xl max-sm:text-lg max-sm:mx-3  text-white  text-center max-sm:text-md text-focus-in m-auto md:w-2/3 mt-5 z-10">Le damos una segunda vida, una segunda oportunidad a diversos materiales de excelente calidad, que al ser desechados son sumamente contaminantes y tardan más de 1.000 años en degradarse.</p>
      </div>
      <div className='bg-black'>
        <div className="carousel w-full ">
          <div id="slide1" className="max-sm:hidden carousel-item relative w-full ">
            <img alt="fondo zapatillas" src={bg1} className="w-full bg-hero " style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide2" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          {/* responsive */}
          <div id="slide_1" className="max-sm:block hidden carousel-item relative w-full ">
            <img alt="fondo zapatillas" src={bg1res} className="w-full bg-hero " style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide_3" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide_2" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          <div id="slide2" className="max-sm:hidden carousel-item relative w-full">
            <img alt="fondo zapatillas" src={bg2} className="w-full bg-hero" style={{height:`100vh`}}/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide3" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          {/* responsive */}
          <div id="slide_2" className="max-sm:block hidden carousel-item relative w-full ">
            <img alt="fondo zapatillas" src={bg2res} className="w-full bg-hero " style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide_1" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide_3" className="btn btn-circle btn-ghost  text-white">❯</a>
            </div>
          </div>
          <div id="slide3" className="max-sm:hidden carousel-item relative w-full">
            <img alt="fondo zapatillas" src={bg3} className="w-full bg-hero" style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide1" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          {/* responsive */}
          <div id="slide_3" className="max-sm:block hidden carousel-item relative w-full ">
            <img alt="fondo zapatillas" src={bg3res} className="w-full bg-hero " style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide_2" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide_1" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection