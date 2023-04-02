import React, { useEffect } from 'react'
import Tshirt from '../../assets/landing/LEAF-Social_Mediapila.jpg'
import '../styles/styles.css'
import LazyLoad from 'react-lazy-load';
import Aos from 'aos';
import 'aos/dist/aos.css'


const SecondSection = () => {
  
  
  useEffect(() => {
    Aos.init();
   })
  

  return (
  <div className="md:hero lg:hero xl:hero min-h-screen  " style={{ backgroundColor: `#F1F3F9` }}>
  <div className="md:hero-content xl:hero-content lg:hero-content flex-col lg:flex-row" >
     {/* <img src={Tshirt} alt="t-shirt" className=' relative max-sm:py-10' /> */}
     <LazyLoad 
     className=' relative max-sm:py-10'>
      <img src={Tshirt} alt="camisa" data-aos = "fade-right" />
    </LazyLoad>

    <div className='md:w-1/2'>
      <h1 className="text-5xl max-sm:text-4xl font-bold  max-sm:mx-4 mx-10  fade-up text-left mb-10" style={{color:`#1D2433`}}>Compromiso social y ambiental en cada paso</h1>
      <p className="py-6 text-justify max-sm:mx-4 mx-10" style={{color:`#4A505C`}}>Como amantes de la moda, no queremos que nuestros productos se produzcan a costa de nuestro planeta o de las personas. Es por eso que transformamos los descartes industriales en EcoProductos de la mano de grandes empresas, talleres sociales y ONGs para darle una segunda vida a materiales de gran calidad.</p>
    </div>
  </div>
</div>  
  )
}
export default SecondSection