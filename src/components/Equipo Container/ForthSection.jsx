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
      <div className="md:hero lg:hero xl:hero min-h-screen bg-white ">
          <div className="hero-content text-center flex flex-col py-20 ">
              <div className="">
                  <h1 className="text-5xl font-bold max-sm:text-4xl"  style={{color:`#1D2433`}}>Nuestro equipo</h1>
                  <p className="py-6"  style={{color:`#4A505C`}}>Juntos somos una gran fuerza y podemos fomentar el futuro que queremos para las nuevas generaciones.</p>
              </div>
              <div className='flex flex-wrap justify-center'>
                
                  <div className="flex flex-wrap  p-4 md:space-x-10 justify-center bg-white rounded-box">
                      <div className="  flex flex-col align-start mt-5">
                          <img src={Santos} className="rounded-box " alt="autor" />
                      <h1 className='font-bold text-lg text-center mt-7 text-black'  style={{color:`#1D2433`}}>
                      Santo Parsons
                          </h1>
                          <p className='font-medium text-lg mb-4 text-center' style={{color:`#4A505C`}} >
                          Chairman & Co-founder
                          </p>
                      </div>
                      <div className="  flex flex-col align-start mt-5">
                          <img src={antonio} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-center mt-7 text-black' style={{color:`#1D2433`}}>
                          Antonio Parsons
                          </h1>
                          <p className='font-medium text-lg mb-4 text-center' style={{color:`#4A505C`}}>
                          Executive Director
                          </p>
                      </div>
                      <div className="  flex flex-col align-start mt-5">
                          <img src={cintia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-center mt-7 text-black'  style={{color:`#1D2433`}}>
                          Cinthia Fehling
                          </h1>
                          <p className='font-medium text-lg mb-4 text-center' style={{color:`#4A505C`}}>
                          CMO (Chief Marketing Officer)
                          </p>
                      </div>
                      <div className="  flex flex-col align-start mt-5">
                          <img src={matias} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-center mt-7 text-black'  style={{color:`#1D2433`}}>
                          Matías Fernández
                          </h1>
                          <p className='font-medium text-lg mb-4 text-center' style={{color:`#4A505C`}}>
                          COO (Chief Operating Officer)
                          </p>
                      </div>
                      <div className="  flex flex-col align-start mt-5">
                          <img src={lucrecia} className="rounded-box" alt="autor" />
                          <h1 className='font-bold text-lg text-center mt-7 text-black'  style={{color:`#1D2433`}}>
                          Lucrecia Ugartemendía
                          </h1>
                          <p className='font-medium text-lg mb-4 text-center' style={{color:`#4A505C`}}>
                          Product Manager
                          </p>
                      </div>
                      
                      {/* <div className="  flex flex-col align-start">
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