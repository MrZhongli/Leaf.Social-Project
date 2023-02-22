import React from 'react'
import ropa from '../../assets/nosotros_section/ropas.png'
import agua from '../../assets/nosotros_section/barril_agua.png'
import contaminacion from '../../assets/nosotros_section/contaminacion.png'

export const ThirdSection = () => {
  return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center flex flex-col ">
              <div className="">
                  <h1 className="text-5xl font-bold " style={{color:`#111827`}}>¿Por que reciclamos?</h1>
                  <p className="py-6" style={{color:`#4A505C`}}>Reciclamos por que toda materia prima virgen causa un gran impacto sobre la tierra, el agua y el aire.</p>
                  {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
              <div className='flex flex-wrap justify-center'>
                
                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={ropa} alt="Ropas" /></figure>
                      <div className="card-body">
                          <h2 className="font-bold text-left text-black ">
                          La industria de la moda es una de las mas contaminantes del mundo
                              
                          </h2>
                          <p className='text-justify' style={{color:`#4A505C`}}>Es la segunda después del petróleo y contamina mas que las aerolíneas.</p>
                      </div>
                  </div>

                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={agua} alt="Barriles de aguas" /></figure>
                      <div className="card-body">
                          <h2 className="font-bold text-left text-black ">
                          La industria de la moda es una de las mas contaminantes del mundo
                              
                          </h2>
                          <p className='text-justify' style={{color:`#4A505C`}}>Lo que equivale a la cantidad que una persona bebe en promedio 3 años.</p>
                          {/* <div className="card-actions justify-end">
                              <div className="badge badge-outline">Fashion</div>
                              <div className="badge badge-outline">Products</div>
                          </div> */}
                      </div>
                  </div>


                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={contaminacion} alt="Barriles de aguas" /></figure>
                      <div className="card-body">
                          <h2 className="font-bold text-left text-black ">
                          Produce 1.5 toneladas de monóxido de carbono por hogar al año                              
                          </h2>
                          <p className='text-justify' style={{color:`#4A505C`}}>Lo que equivale a 6000 autos en marcha y representa el 10% de emisiones globales de C02.</p>
                          {/* <div className="card-actions justify-end">
                              <div className="badge badge-outline">Fashion</div>
                              <div className="badge badge-outline">Products</div>
                          </div> */}
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}
