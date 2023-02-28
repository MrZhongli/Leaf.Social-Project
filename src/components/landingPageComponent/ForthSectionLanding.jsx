import React from 'react'
import newsan from '../../assets/marcas/Newsan.png'
import MeLi from '../../assets/marcas/MeLi.png'
import TiendaNube from '../../assets/marcas/Tiendanube.png'
import Wolsvagen from '../../assets/marcas/Wolsvagen.png'
import Herzt from '../../assets/marcas/Hertz.png'
import Sygenta from '../../assets/marcas/Sygenta.png'
import Renault from '../../assets/marcas/Renault.png'
import Fate from '../../assets/marcas/Fate_O.png'

export const ForthSectionLanding = () => {
  return (
      <div className="hero min-h-screen bg-white"  >
          <div className="hero-content text-center">
              <div className="">
                  <h1 className="text-5xl font-bold text-black  text-center" >Juntos podemos fomentar el futuro que queremos</h1>
                  <p className="py-6" style={{ color: `#6D7280` }}>Algunas de las mejores marcas trabajan con nosotros</p>
                <div className='flex flex-row flex-wrap m-20'>
                    <div className='mx-10'>
                    <img src={newsan} alt="Newsan" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={MeLi} alt="Mercado Libre" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={TiendaNube} alt="tienda nube" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={Wolsvagen} alt="wolsvagen" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={Herzt} alt="Hertz" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={Sygenta} alt="Sygenta" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={Renault} alt="Renault" /> 
                    </div>                      
                    <div className='mx-10'>
                    <img src={Fate} alt="fate o " /> 
                    </div>                      
                </div>
              </div>
          </div>
      </div>
  )
}
