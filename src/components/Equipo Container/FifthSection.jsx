import React, { useEffect, useState } from 'react'
// import paraguas from '../../assets/nosotros_section/paraguas.png'
// import velas from '../../assets/nosotros_section/velas_kitsurf.png'
// import sachets from '../../assets/nosotros_section/sachets_leche.png'
// import arpillera from '../../assets/nosotros_section/arpillera.png'
import  {Material}  from '../blogComponent/data/data'
import  {MaterialResponsive}  from '../blogComponent/data/data'
import '../styles/styles.css'
import MaterialItems from './MaterialItems'
// import Carousel from '../CarouselComponent/Carousel.jsx'

export const FifthSection = () => {

    // const material = new Object(...Material)
    const [item, setItem] = useState([])
    const [itemResponsive, setItemResponsive] = useState([])

    useEffect(() => {
        setItem(Material)
        setItemResponsive(MaterialResponsive)
    })

  return (
      <div className="hero py-20 bg-white ">
          <div className="hero-content text-center flex flex-col ">
              <div>
                  <h1 className="text-5xl max-sm:text-4xl font-bold text-black" style={{color:`#1D2433`}}>Materiales que reciclamos</h1>
                  <p className="py-6" style={{color:`#4A505C`}}>Recolectamos una amplia cantidad de distintos tipos de materiales que luego transformamos en productos.</p>
              </div>
                  <div className="max-sm:hidden  flex flex-wrap justify-center space-x-4 bg-white rounded-box">
                      {
                        item.map(p=>
                            <MaterialItems item={p}/>
                            )
                      }
                  </div>
                  <div className='md:hidden'>
                  {
                      itemResponsive.map(p =>
                          <MaterialItems item={p} />
                      )
                  } 
                  <p className='text-md' style={{color:`#4A505C`}}> Entre otros</p>
                  </div>
          </div>
          {/* <Carousel/> */}
      </div>
  )
}