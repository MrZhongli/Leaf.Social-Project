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
    <div className="hero " style={{backgroundColor:`#F9FAFB`}}  >
    <div className="hero-content mt-10 text-center">
        <div className="">
            <h1 className="text-5xl font-bold max-sm:text-4xl text-center" style={{color:`#1D2433`}}>Juntos podemos fomentar el futuro que queremos</h1>
            <p className="py-6" style={{ color: `#6D7280` }}>ONGs con las que trabajamos</p>
          <div className='flex flex-row flex-wrap max-sm:grid max-sm:grid-cols-2  mt-20 justify-center'>
              <div className='m-5'>
              
               <a href="https://www.techo.org.ar/"><img src={techo} alt="techo" /></a>
              </div>                      
              <div className='m-5'>
              <a href="https://www.elpotrero.org/"><img src={potrero} alt="el potrero" /> </a>
              </div>                      
              <div className='m-5'>
              <a href="https://www.instagram.com/comprometidasac/"><img src={cac} alt="Acosiacion Civil Comprometidas" /></a>
              </div>                      
              <div className='m-5'>
                <a href="https://idel.org.ar/"><img src={idel} alt="idel" /> </a>
              </div>                      
              <div className='m-5'>
              <a href="https://www.mediapila.org.ar/"><img src={mediapila} alt="mediapila" /></a>
              </div>                      
              <div className='m-5'>
              <a href="http://fundacionhampatu.org/">
              <img src={hampatu} alt="Hampatu" /> </a>
              </div>                      
              <div className='m-5 '>
              <a href="https://www.instagram.com/justiciarestaurativaar/">
              <img src={jr} alt="justicia restaurativa" /> 
              </a>
              </div>                      
              <div className='m-5'>
              <a href="http://labarca.org.ar/inicio/">
              <img src={barca} alt="La barca " /> </a>
              </div>                      
              <div className='m-5'>
              <a href="https://www.instagram.com/amigosenelcamino/">
              <img src={amigos} alt="Amigos en el camino " /> </a>
              </div>                      
          </div>
        </div>
    </div>
</div>
  )
}

export default SixSection