import React from 'react'
import '../styles/styles.css'
import bg1 from '../../assets/product_section/product-bg-main.jpg'
import bg2 from '../../assets/product_section/Product_banner_2.jpg'
import bg3 from '../../assets/product_section/Product_banner_3.jpg'

const MainSection = () => {
  return (
    <>
    <div className='absolute top-1/3 mt-24 flex flex-col sm:left-32 max-sm:left-10'>
        <h1 className="text-5xl font-bold text-white text-left text-focus-in " >Productos con propositos</h1>
        <p className="py-6 text-xl text-white  text-left text-focus-in">Vestirse bien puede ser un acto de consciencia social y ambiental</p>
      </div>
      <div className=''>
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full ">
            <img alt="fondo zapatillas" src={bg1} className="w-full bg-hero " style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-ghost ">❮</a>
              <a href="#slide2" className="btn btn-circle btn-ghost  ">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img alt="fondo zapatillas" src={bg2} className="w-full bg-hero" style={{height:`100vh`}}/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost">❮</a>
              <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img alt="fondo zapatillas" src={bg3} className="w-full bg-hero" style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-ghost">❮</a>
              <a href="#slide1" className="btn btn-circle btn-ghost">❯</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection