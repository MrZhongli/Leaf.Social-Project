import React from 'react';
import leaf from '../../assets/nosotros_section/leaf-logo.png'
import rezet from '../../assets/nosotros_section/rezet-logo.png'
import silobag from '../../assets/nosotros_section/silobag-logo.png'
import { Link } from 'react-router-dom';

const EightSection = () => {
  return (
    <div className="lg:hero md:hero xl:hero min-h-screen" style={{backgroundColor:`#F9FAFB`}}>
          <div className="text-center flex flex-col">
              <div className=' mt-20'>
                  <h1 className="text-5xl max-sm:text-4xl font-bold my-20 mx-10" style={{color:`#111827`}}>Demostramos que el cambio es posible</h1>
                  {/* <p className="py-6" style={{ color: `#4A505C` }}>Somos una empresas de triple impacto basada en el reciclado de silobolsas del campo en desuso para crear accesorios ecológicos.</p> */}
              </div>
              <div className='flex flex-wrap justify-center'>
                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={leaf}  alt="logo" /></figure>
                      <div className="card-body">
                          {/* <h2 className="font-bold text-center text-black ">
                            LEAF
                          </h2> */}
                          <p className='text-center' style={{ color: `#4A505C` }}>Marcamos la diferencia mostrando cómo diversos materiales de alta calidad, que son desechados, tienen la posibilidad de transformarse en un gran EcoProducto</p>
                      </div>
                  </div>
                  <div className="card w-72  mx-5 bg-white">
                      <figure><img src={rezet} alt="logo" /></figure>
                      <div className="card-body">
                          {/* <h2 className="font-bold text-center text-black ">
                            REZET
                          </h2> */}
                          <p className='text-center' style={{ color: `#4A505C` }}>Involucramos a las marcas y empresas a ser parte del cambio, resolviendo necesidades de descarte, packaging y mercahndising de las mismas, a la vez que, de esta manera, se comunican valores vinculados.</p>
                      </div>
                  </div>
                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={silobag} alt="logo" /></figure>
                      <div className="card-body">
                          {/* <h2 className="font-bold text-center text-black ">
                              SILOBAG
                          </h2> */}
                          <p className='text-center' style={{color:`#4A505C`}}>Demostramos que la silobolsa puede tener más de un solo uso. Productos únicos e irrepetibles nacen a partir de este hermoso material.</p>
                      </div>
                  </div>
              </div>
              {/* <Link to="/Quienes_somos" className="btn bg-orange hover:bg-red-500 normal-case border-transparent  text-white mt-20 m-auto w-36">Conocé más</Link> */}
          </div>
      </div>
  )
}

export default EightSection