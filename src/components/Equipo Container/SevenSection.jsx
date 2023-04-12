import React, { useEffect } from 'react'
import bg from '../../assets/nosotros_section/man-img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../styles/styles.css'

const SevenSection = () => {
    useEffect(() => {
        Aos.init();
       })
    return (
      <div className="lg:hero xl:hero md:hero min-h-screen   bg-white" style={{backgroundColor:`#f6f7fb`}}>
          <div className="hero-content flex-col lg:flex-row">
              <img src={bg} className="max-w-sm rounded-lg shadow-2xl" alt='modelo' data-aos="fade-right"/>
              <div className='mx-6' data-aos="fade-left">
                  <h1 className="text-5xl max-sm:text-4xl max-sm:w-60 font-bold text-left mb-10" style={{color:`#111827`}} >Compromiso social y ambiental en cada paso</h1>
                  <p className="py-6 text-justify max-sm:mx-2 " style={{ color: `#6D7280` }}>LEAF SOCIAL es una marca que se enfoca en el reciclado de diversos materiales para crear productos ecológicos dentro de la industria de la moda. Su objetivo es transformar los descartes industriales en productos como ecobolsas, ecomochilas y ecocarteras que resuelven necesidades de packaging y merchandising de grandes empresas, a la vez que transmiten valores de cuidado ambiental. La marca busca involucrar tanto a los consumidores como a las empresas en la responsabilidad de aportar al cambio social, siendo solidarios con la compra de productos cotidianos y concientizándolos sobre el cuidado ambiental. LEAF SOCIAL busca hacer negocios que cambien el mundo.</p>
              </div>
          </div>
      </div>
  )
}

export default SevenSection