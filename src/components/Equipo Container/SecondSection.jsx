import React, { useEffect } from 'react'
import number1 from '../../assets/nosotros_section/Number1.png'
import number2 from '../../assets/nosotros_section/Number2.png'
import number3 from '../../assets/nosotros_section/Number3.png'
import number4 from '../../assets/nosotros_section/Number4.png'
import '../styles/styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SecondSectionTeam = () => {
    useEffect(() => {
        Aos.init();
       })
  return (
        <div className="hero" style={{backgroundColor:`#F9FAFB`}}>
            <div className="text-center mt-20">
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold " style={{color:`#111827`}}>Cómo lo hacemos</h1>
                    <p className="py-6 text-slate-400  m-5" style={{color:`#4A505C`}}>Somos una empresa de triple impacto que crea productos solidarios hechos con materiales reciclados, potenciando la inclusión social en Argentina.</p>
                    <div className='flex m-auto w-screen flex-wrap justify-center'>
                        <div className="card w-72 bg-white my-5 mx-5" data-aos="fade-up">
                            <figure className="px-10 pt-10">
                                <img src={number1} alt="impacto social" />
                            </figure>
                            <div className="card-body items-center text-center">
                                {/* <h2 className="card-title" style={{color:`#1D2433`}}>Paso 1</h2> */}
                                <p style={{color:`#4A505C`}} className="my-9">
                                Recolectamos los materiales en desuso o desechados de grandes empresas y le damos una segunda vida.
                                </p>
                            </div>
                        </div>
                        {/* card2 */}
                        <div className="card w-72 bg-white my-5 mx-5" data-aos="fade-up">
                            <figure className="px-10 pt-10">
                                <img src={number2} alt="impacto social" />
                            </figure>
                            <div className="card-body items-center text-center">
                                {/* <h2 className="card-title" style={{color:`#1D2433`}}>Paso 2</h2> */}
                              <p style={{ color: `#4A505C` }} className="my-9">Generamos oportunidades laborales de inclusión social a personas en situación de vulnerabilidad.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card w-72 bg-white my-5 mx-5 " data-aos="fade-up">
                            <figure className="px-10 pt-10">
                                <img src={number3} alt="Producto con proposito" />
                            </figure>
                            <div className="card-body items-center text-center">
                                {/* <h2 className="card-title" style={{color:`#1D2433`}}>Paso 3</h2> */}
                              <p style={{ color: `#4A505C` }} className="my-9">Creamos EcoProductos de alta calidad con diseños únicos y personalizados, que marcan tendencia.</p>
                            </div>
                        </div>
                        {/* 4 */}
                      <div className="card w-72 bg-white my-5 mx-5" data-aos="fade-up">
                          <figure className="px-10 pt-10">
                              <img src={number4} alt="Producto con proposito" />
                          </figure>
                          <div className="card-body items-center text-center">
                              {/* <h2 className="card-title" style={{color:`#1D2433`}}>Paso 4</h2> */}
                              <p style={{ color: `#4A505C` }} className="my-9">Con cada compra se potencia el trabajo nacional y se colabora con diversas ONGs.</p>
                          </div>
                      </div>
                    </div>
                </div>
                  
            </div>
        </div>
    )
}

export default SecondSectionTeam