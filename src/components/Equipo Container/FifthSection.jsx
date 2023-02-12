import React from 'react'
import paraguas from '../../assets/nosotros_section/paraguas.png'
import velas from '../../assets/nosotros_section/velas_kitsurf.png'
import sachets from '../../assets/nosotros_section/sachets_leche.png'
import arpillera from '../../assets/nosotros_section/arpillera.png'

export const FifthSection = () => {
  return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center flex flex-col ">
              <div className="">
                  <h1 className="text-5xl font-bold text-black">Materiales que reciclamos</h1>
                  <p className="py-6">Recolectamos una amplia cantidad de distintos tipos de materiales que luego transformamos en productos.</p>
                  {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
              <div className='flex flex-wrap justify-center'>
                
                  <div className="carousel carousel-center  p-4 space-x-4 bg-white rounded-box">
                      <div className="carousel-item">
                          <img src={paraguas} className="rounded-box" />
                      </div>
                      <div className="carousel-item">
                          <img src={velas} className="rounded-box" />
                      </div>
                      <div className="carousel-item">
                          <img src={sachets} className="rounded-box" />
                      </div>
                      <div className="carousel-item">
                          <img src={arpillera} className="rounded-box" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}