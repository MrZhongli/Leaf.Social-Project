import React from 'react'
import '../styles/styles.css'
import rectangle from '../../assets/Rectangle_1.png'
import Alpargauchas from '../../assets/Alpargauchas.png'

const FifthSection = () => {
  return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={rectangle} className=" relative md:left-36 " alt="figura"  />
              <img src={Alpargauchas} className="absolute md:right-10 mt-20 max-sm:mb-96 " alt="Alpargauchas" />
              <div>
                  <h1 className="text-5xl font-bold text-black">Productos solidarios</h1>
                  <p className="py-6 text-justify" style={{ color: `#6D7280` }}>Con cada compra estás ayudando a todos los involucrados en el proceso de producción y colaborando con TECHO para que puedan cumplir con su misión de superar la pobreza, educando a niños, capacitando a adultos y construyendo casa en los asentamientos, generando una mejor calidad de vida.</p>
                  <button className="btn bg-orange text-white mx-5">Conseguilas</button>
                  <button className="btn bg-transparent text-black">Ver más</button>
              </div>
          </div>
      </div>
  )
}

export default FifthSection