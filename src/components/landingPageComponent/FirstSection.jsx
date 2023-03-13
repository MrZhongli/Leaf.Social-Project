import React from 'react'
// import Shoes from '../../assets/Shoes-img.png'
import '../styles/styles.css'
import bg from '../../assets/background-home.png'
import bg2 from '../../assets/background-home2.png'
import bg3 from '../../assets/background-home3(1).png'

// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const MyImage = ({ image }) => (
//   <div>
//     <LazyLoadImage
//       alt={image.alt}
//       height={image.height}
//       src={image.src} // use normal <img> attributes as props
//       width={image.width} />
//     <span>{image.caption}</span>
//   </div>

const FirstSection = () => {
  return (
    <>
      <div className='absolute top-1/3 mt-24 flex flex-col left-32 max-sm:left-0 max-sm:top-72'>
        <h1 className="text-6xl font-bold text-white text-left  max-sm:text-5xl max-sm:mx-5 " >Productos con propositos</h1>
        <p className="py-6 text-xl text-white  text-left   max-sm:mx-5">Vestirse bien puede ser un acto de consciencia social y ambiental</p>
      </div>
      <div className='bg-black'>
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full ">
            <img src={bg} className="w-full bg-hero " style={{height:`100vh`}} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-ghost ">❮</a>
              <a href="#slide2" className="btn btn-circle btn-ghost  ">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={bg2} className="w-full bg-hero" style={{height:`100vh`}}/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost">❮</a>
              <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={bg3} className="w-full bg-hero" style={{height:`100vh`}} />
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

export default FirstSection