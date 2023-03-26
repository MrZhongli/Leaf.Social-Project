import React from 'react'
import marcelo from '../../assets/nosotros_section/nine_section/Marcelo.png'
import carolina from '../../assets/nosotros_section/nine_section/Carolina(1).png'
import damian from '../../assets/nosotros_section/nine_section/Damian.png'

const NineSection = () => {
  return (
      <div className="md:hero lg:hero xl:hero min-h-screen " style={{backgroundColor:`#f6f7fb`}}>
          <div className="text-center flex flex-col">
              <div className="">
                  <h1 className="text-5xl font-bold" style={{color:`#1D2433`}}>Conectando talentos con oportunidades</h1>
                  <p className="py-6" style={{color:`#4A505C`}}>Generamos nuevas oportunidades</p>
              </div>
              <div className='flex flex-wrap'>
                <img src={marcelo} className='md:m-5 mt-2' alt="personas talentosas" />
                <img src={carolina} className='md:m-5 mt-2' alt="personas talentosas" />
                <img src={damian} className='md:m-5 mt-2' alt="personas talentosas" />
              </div>
          </div>
          <div>

          </div>
      </div>
  )
}

export default NineSection