import React from 'react'
import '../styles/styles.css'
import bg1 from '../../assets/product_section/product-bg-main.jpg'
import bg2 from '../../assets/product_section/Product_banner_2.jpg'
import bg3 from '../../assets/product_section/Product_banner_3.jpg'
import bg4 from '../../assets/product_section/Banner_365.jpg'
// responsive
import bg4res from '../../assets/product_section/product-banner-R/banner-1.png'
import bg2res from '../../assets/product_section/product-banner-R/banner-2.png'
import bg3res from '../../assets/product_section/product-banner-R/banner-3.png'

const MainSection = () => {
  return (
    <>
    <div className='absolute top-1/3 mt-24 max-sm:mt-0 flex flex-col left-32 max-sm:left-0 max-sm:top-72'>
        <h1 className="text-6xl font-bold text-white text-left max-sm:text-center  max-sm:text-4xl max-sm:mx-5 text-focus-in z-10" >Productos con propósito</h1>
        <p className="py-6 text-xl max-sm:text-lg max-sm:text-center text-white  text-left   max-sm:mx-5 text-focus-in z-10">Vestirse bien puede ser un acto de consciencia social y ambiental</p>
      </div>
      <div className='bg-black'>
        <div className="carousel w-full ">
        <div id="slide1" className="max-sm:hidden carousel-item relative w-full">
            <img alt="fondo productos" src={bg4} className="w-full bg-hero" style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide2" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          {/* responsive */}
        <div id="slide_1" className="max-sm:block hidden carousel-item relative w-full">
            <img alt="fondo productos" src={bg4res} className="w-full bg-hero" style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide_3" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide_2" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          
          
          <div id="slide2" className="max-sm:hidden carousel-item relative w-full">
            <img alt="fondo productos" src={bg2} className="w-full bg-hero" style={{height:`100vh`}}/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide3" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          {/*  responsive */}
          <div id="slide_2" className="max-sm:block hidden carousel-item relative w-full">
            <img alt="fondo productos" src={bg2res} className="w-full bg-hero" style={{height:`100vh`}}/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide_1" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide_3" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>

          <div id="slide3" className="max-sm:hidden carousel-item relative w-full">
            <img alt="fondo productos" src={bg3} className="w-full bg-hero" style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide1" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          {/*  responsive */}
          <div id="slide_3" className="max-sm:block hidden carousel-item relative w-full">
            <img alt="fondo productos" src={bg3res} className="w-full bg-hero" style={{height:`100vh`}}/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide_2" className="btn btn-circle btn-ghost text-white ">❮</a>
              <a href="#slide_1" className="btn btn-circle btn-ghost text-white ">❯</a>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default MainSection