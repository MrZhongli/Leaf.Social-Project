import React, { useState } from 'react'
import paraguas from '../../assets/nosotros_section/paraguas.png'
import velas from '../../assets/nosotros_section/velas_kitsurf.png'
import sachets from '../../assets/nosotros_section/sachets_leche.png'
import arpillera from '../../assets/nosotros_section/arpillera.png'
import  {Material}  from '../blogComponent/data/data'

export const FifthSection = () => {

    const [Materiales, setMateriales] = useState(Material)

    console.log({Material})
  return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center flex flex-col ">
              <div>
                  <h1 className="text-5xl font-bold text-black" style={{color:`#1D2433`}}>Materiales que reciclamos</h1>
                  <p className="py-6" style={{color:`#4A505C`}}>Recolectamos una amplia cantidad de distintos tipos de materiales que luego transformamos en productos.</p>
              </div>
              {/* <div className='flex flex-wrap justify-center'> */}
                
                  <div className="  flex flex-wrap   justify-center space-x-4 space-y-4 bg-white rounded-box">
                      <div className=" ">
                          <img src={paraguas} alt="materiales" className="rounded-none transition-1 hover:scale-110" />
                      </div>
                      <div className=" ">
                          <img src={velas} alt="materiales" className="rounded-none transition-1 hover:scale-110" />
                      </div>
                      <div className=" ">
                          <img src={velas} alt="materiales" className="rounded-none transition-1 hover:scale-110" />
                      </div>
                      {
                        Materiales.map(item=>
                            <div>
                                <img src={item} />
                            </div>
                            )
                      }
                  </div>
              {/* </div> */}
          </div>
      </div>
  )
}