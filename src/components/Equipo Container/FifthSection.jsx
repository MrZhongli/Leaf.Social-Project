import React, { useEffect, useState } from 'react'
import paraguas from '../../assets/nosotros_section/paraguas.png'
import velas from '../../assets/nosotros_section/velas_kitsurf.png'
import sachets from '../../assets/nosotros_section/sachets_leche.png'
import arpillera from '../../assets/nosotros_section/arpillera.png'
import  {Material}  from '../blogComponent/data/data'
import '../styles/styles.css'
import MaterialItems from './MaterialItems'

export const FifthSection = () => {

    // const material = new Object(...Material)
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(Material)
    })

  return (
      <div className="hero py-52 bg-white">
          <div className="hero-content text-center flex flex-col ">
              <div>
                  <h1 className="text-5xl font-bold text-black" style={{color:`#1D2433`}}>Materiales que reciclamos</h1>
                  <p className="py-6" style={{color:`#4A505C`}}>Trabajamos con una amplia cantidad de distintos tipos de materiales que luego transformamos en productos.</p>
              </div>
                  <div className="  flex flex-wrap justify-center space-x-4 bg-white rounded-box">
                      {
                        item.map(p=>
                            <MaterialItems item={p}/>
                            )
                      }
                  </div>
          </div>
      </div>
  )
}