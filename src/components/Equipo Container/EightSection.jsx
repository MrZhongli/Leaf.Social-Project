import React from 'react';
import leaf from '../../assets/nosotros_section/leaf-logo.png'
import rezet from '../../assets/nosotros_section/rezet-logo.png'
import silobag from '../../assets/nosotros_section/silobag-logo.png'

const EightSection = () => {
  return (
    <div className="lg:hero md:hero xl:hero min-h-screen bg-white">
          <div className="text-center flex flex-col ">
              <div>
                  <h1 className="text-5xl max-sm:text-3xl font-bold " style={{color:`#111827`}}>Demostramos que el cambio es posible</h1>
                  <p className="py-6" style={{ color: `#4A505C` }}>Somos una empresas de triple impacto basada en el reciclado de silobolsas del campo en desuso para crear accesorios ecológicos.</p>
              </div>
              <div className='flex flex-wrap justify-center'>
                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={leaf}  alt="logo" /></figure>
                      <div className="card-body">
                          <h2 className="font-bold text-center text-black ">
                            LEAF
                          </h2>
                          <p className='text-justify' style={{ color: `#4A505C` }}>Marcamos la diferencia mostrando como diversos materiales de alta calidad, que son desechados, tienen la posibilidad de transformarse en un gran EcoProducto</p>
                      </div>
                  </div>
                  <div className="card w-72  mx-5 bg-white">
                      <figure><img src={rezet} alt="logo" /></figure>
                      <div className="card-body">
                          <h2 className="font-bold text-center text-black ">
                            REZET
                          </h2>
                          <p className='text-justify' style={{ color: `#4A505C` }}>Involucramos a las marcas y empresas a ser parte del cambio, resolviendo necesidades de packaging y merchandising de las mismas, a la vez que comunican valores vinculados al cuidado del medio ambiente.</p>
                      </div>
                  </div>
                  <div className="card w-72 mx-5 bg-white">
                      <figure><img src={silobag} alt="logo" /></figure>
                      <div className="card-body">
                          <h2 className="font-bold text-center text-black ">
                              SILOBAG
                          </h2>
                          <p className='text-justify' style={{color:`#4A505C`}}>Demostramos que la silobolsa puede tener más de un solo uso. Productos únicos e irrepetibles nacen a partir de este hermoso material.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default EightSection