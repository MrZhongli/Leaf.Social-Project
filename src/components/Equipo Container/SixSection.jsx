import React from 'react'
import techo from '../../assets/marcas/marcas_landpage/techo.png'
import potrero from '../../assets/marcas/marcas_landpage/el_potrero.png'
import cac from '../../assets/marcas/marcas_landpage/Asociacion-Civil-Comprometidas.png'
import idel from '../../assets/marcas/marcas_landpage/IDEL.png'
import mediapila from '../../assets/marcas/marcas_landpage/Mediapila.png'
import hampatu from '../../assets/marcas/marcas_landpage/Hampatu.png'
import jr from '../../assets/marcas/marcas_landpage/Justicia-Restaurativa.png'
import barca from '../../assets/marcas/marcas_landpage/La-Barca.png'
import amigos from '../../assets/marcas/marcas_landpage/amigos-en-el-camino.png'


const SixSection = () => {
  return (
    <div className="hero min-h-screen bg-white"  >
    <div className="hero-content mt-10 text-center">
        <div className="">
            <h1 className="text-5xl font-bold   text-center" style={{color:`#1D2433`}}>Juntos podemos fomentar el futuro que queremos</h1>
            <p className="py-6" style={{ color: `#6D7280` }}>Algunas de las mejores marcas trabajan con nosotros</p>
          <div className='flex flex-row flex-wrap mt-20 justify-center'>
              <div className='max-sm:m-10 m-5'>
              <img src={techo} alt="techo" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={potrero} alt="el potrero" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={cac} alt="Acosiacion Civil Comprometidas" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={idel} alt="idel" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={mediapila} alt="mediapila" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={hampatu} alt="Hampatu" /> 
              </div>                      
              <div className='max-sm:m-10 m-5 '>
              <img src={jr} alt="justicia restaurativa" /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={barca} alt="La barca " /> 
              </div>                      
              <div className='max-sm:m-10 m-5'>
              <img src={amigos} alt="Amigos en el camino " /> 
              </div>                      
          </div>
        </div>
    </div>
</div>
  )
}

export default SixSection