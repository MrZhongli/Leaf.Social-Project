import React from 'react'
import marcelo from '../../assets/nosotros_section/nine_section/Marcelo.png'
import carolina from '../../assets/nosotros_section/nine_section/Carolina(1).png'
import damian from '../../assets/nosotros_section/nine_section/Damian.png'
import Ana from '../../assets/nosotros_section/nine_section/Ana.jpg'
import Alicia from '../../assets/nosotros_section/nine_section/Alicia.jpg'
import Vicente from '../../assets/nosotros_section/nine_section/Vicente.jpg'

const NineSection = () => {
  return (
      <div className="md:hero lg:hero xl:hero min-h-screen py-20" style={{ backgroundColor: `#f6f7fb` }}>
          <div className="text-center flex flex-col ">
              <div>
                  <h1 className="text-5xl font-bold max-sm:text-4xl mb-20" style={{ color: `#1D2433` }}>Conectando talentos con oportunidades</h1>
                  {/* <p className="py-6 " style={{ color: `#4A505C` }}>Generamos nuevas oportunidades</p> */}
              </div>
              <div className='flex flex-wrap justify-center max-sm:m-2'>
                  <div className='flex flex-col text-start'>
                      <img src={marcelo} className='md:m-5 mt-2' alt="personas talentosas" />
                      <button className='btn mx-10 relative bottom-20  capitalize text-lg  opacity-70 w-20'>Marcelo </button>
                  </div>
                  <div className='flex flex-col text-start'>
                      <img src={carolina} className='md:m-5 mt-2' alt="personas talentosas" />
                      <button className='btn mx-10 relative bottom-20 capitalize text-lg opacity-70 w-20'>Carolina </button>
                  </div>
                  <div className='flex flex-col text-start'>
                      <img src={damian} className='md:m-5 mt-2' alt="personas talentosas" />
                      <button className='btn mx-10 relative bottom-20  capitalize text-lg opacity-70 w-20'>Damián </button>
                  </div>
                  <div className='max-sm:hidden flex flex-col text-start'>
                      <img src={Alicia} className='md:m-5 mt-2' alt="personas talentosas" />
                      <button className='btn mx-10 relative bottom-20 capitalize text-lg opacity-70 w-20'>Alicia </button>
                  </div>
                  <div className='max-sm:hidden flex flex-col text-start'>
                      <img src={Ana} className='md:m-5 mt-2' alt="personas talentosas" />
                      <button className='btn mx-10 relative bottom-20 capitalize text-lg opacity-70 w-20'>Ana </button>
                  </div>
                  <div className='max-sm:hidden flex flex-col text-start'>
                      <img src={Vicente} className='md:m-5 mt-2' alt="personas talentosas" />
                      <button className='btn mx-10 relative bottom-20 capitalize text-lg opacity-70 w-20'>Vicente </button>
                  </div>
              </div>
          </div>
          <div>
          </div>
      </div>
  )
}

export default NineSection