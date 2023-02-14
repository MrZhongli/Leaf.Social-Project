import React from 'react'
import Santos from '../../assets/nosotros_section/santo_parsons.png'
// import velas from '../../assets/nosotros_section/velas_kitsurf.png'
import cintia from '../../assets/nosotros_section/cintia.png'
// import arpillera from '../../assets/nosotros_section/arpillera.png'

export const ForthSection = () => {
  return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center flex flex-col ">
              <div className="">
                  <h1 className="text-5xl font-bold text-black">Nuestro equipo</h1>
                  <p className="py-6">Conoce a los miembros de nuestro equipo.</p>
              </div>
              <div className='flex flex-wrap justify-center'>
                
                  <div className="carousel carousel-center  p-4 space-x-4 bg-white rounded-box">
                      <div className="carousel-item flex flex-col align-start">
                          <img src={Santos} className="rounded-box" alt="autor" />
                      <h1 className='font-bold text-lg text-left mt-7 text-black'>
                      Santo Parsons
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left'>
                          Founder
                          </p>
                      </div>
                      <div className="carousel-item flex flex-col align-start">
                          <img src={cintia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black'>
                          Cintia Felding
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left'>
                          Co-founder
                          </p>
                      </div>
                      <div className="carousel-item flex flex-col align-start">
                          <img src={cintia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black'>
                          Cintia Felding
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left'>
                          Co-founder
                          </p>
                      </div>
                      <div className="carousel-item flex flex-col align-start">
                          <img src={cintia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black'>
                          Cintia Felding
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left'>
                          Co-founder
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}