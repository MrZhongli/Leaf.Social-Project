import React from 'react'
import Santos from '../../assets/nosotros_section/santo_parsons.png'
import cintia from '../../assets/nosotros_section/cintia.png'
import matias from '../../assets/nosotros_section/Matias.png'
import antonio from '../../assets/nosotros_section/Antonio.png'
import lucrecia from '../../assets/nosotros_section/Lucrecia.png'
// import velas from '../../assets/nosotros_section/velas_kitsurf.png'
// import arpillera from '../../assets/nosotros_section/arpillera.png'

export const ForthSection = () => {
  return (
      <div className="md:hero lg:hero xl:hero min-h-screen bg-white">
          <div className="hero-content text-center flex flex-col ">
              <div className="">
                  <h1 className="text-5xl font-bold "  style={{color:`#1D2433`}}>Nuestro equipo</h1>
                  <p className="py-6"  style={{color:`#4A505C`}}>Juntos somos una gran fuerza y podemos fomentar el futuro que queremos para las nuevas generaciones.</p>
              </div>
              <div className='flex flex-wrap justify-center'>
                
                  <div className="carousel carousel-center  p-4 space-x-4 bg-white rounded-box">
                      <div className="carousel-item flex flex-col align-start">
                          <img src={Santos} className="rounded-box " alt="autor" />
                      <h1 className='font-bold text-lg text-left mt-7 text-black'  style={{color:`#1D2433`}}>
                      Santo Parsons
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left' style={{color:`#4A505C`}} >
                          Founder
                          </p>
                      </div>
                      <div className="carousel-item flex flex-col align-start">
                          <img src={cintia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black'  style={{color:`#1D2433`}}>
                          Cintia Felding
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left' style={{color:`#4A505C`}}>
                          Co-founder
                          </p>
                      </div>
                      <div className="carousel-item flex flex-col align-start">
                          <img src={matias} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black'  style={{color:`#1D2433`}}>
                          Matias Fernandez
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left' style={{color:`#4A505C`}}>
                          Ceo
                          </p>
                      </div>
                      <div className="carousel-item flex flex-col align-start">
                          <img src={antonio} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black' style={{color:`#1D2433`}}>
                          Antonio Parsons
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left' style={{color:`#4A505C`}}>
                          Cmo
                          </p>
                      </div>
                      {/* <div className="carousel-item flex flex-col align-start">
                          <img src={lucrecia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-left mt-7 text-black' style={{color:`#1D2433`}}>
                          Lucrecia Ugartemendia
                          </h1>
                          <p className='font-medium text-lg mt-2 text-left' style={{color:`#4A505C`}}>
                          Cmo
                          </p>
                      </div> */}
                  </div>
              </div>
          </div>
      </div>
  )
}