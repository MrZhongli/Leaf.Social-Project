import React from 'react'
import green from '../../assets/marcas/marcas_team/Business-Green-Leader-Awards.png'
import fecobaj from '../../assets/marcas/marcas_team/Fecoba-Joven.png'
// import ToyImg from '../../assets/marcas/toy.png'
import ibero from '../../assets/marcas/marcas_team/Iberoamericana-Juventud.png'
import trasnformers from '../../assets/marcas/marcas_team/Mujeres-Transformadoras-Voces-Vitales.png'
import latamverde from '../../assets/marcas/marcas_team/Latinoamerica-Verde.png'
import fecobaM from '../../assets/marcas/marcas_team/Fecoba-mujeres.png'
import invest from '../../assets/marcas/marcas_team/Investment-Awards.png'
import Proesus from '../../assets/marcas/marcas_team/Proesus.png'



const TeenSection = () => {
  return (
    <div className="hero min-h-screen bg-white"  >
    <div className="hero-content mt-10 text-center">
        <div className="">
            <h1 className="text-5xl font-bold   text-center" style={{color:`#1D2433`}}>Reconocimientos & premios</h1>
            {/* <p className="py-6" style={{ color: `#6D7280` }}>Algunas de las mejores marcas trabajan con nosotros</p> */}
          <div className='flex flex-row flex-wrap mt-20 justify-center'>
              <div className='max-sm:m-10 m-5'>
              <img src={green} alt="techo" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={fecobaj} alt="Fecoba Joven" /> 
              </div>                      
              {/* <div className='max-sm:m-10 m-5'>
              <img src={ToyImg} alt="JCI TOYP" /> 
              </div>                       */}
              <div className='max-sm:m-10 m-5'>
              <img src={ibero} alt="Iberoamericana Juventud" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={trasnformers} alt="Mujeres-Transformadoras-Voces-Vitales" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={latamverde} alt="Mujeres-Transformadoras-Voces-Vitales" /> 
              </div>                      
              <div className='max-sm:m-10 m-5 '>
              <img src={fecobaM} alt="fecoba mujeres" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={invest} alt="Investment Awards " /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={Proesus} alt="Proesus " /> 
              </div>                      
          </div>
        </div>
    </div>
</div>
  )
}

export default TeenSection