import React from 'react'
import '../styles/styles.css'
import shadow from '../../assets/landing/Sombra.png'
import Alpargauchas from '../../assets/landing/EveryDay-Pink.png'
import { Link } from 'react-router-dom'

const FifthSection = () => {
  return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={shadow} className=" relative" alt="sombra"  />
              <img src={Alpargauchas} className="absolute md:right-10 max-sm:mt-0  mt-48 max-sm:mb-96 md:mb-52" alt="Alpargauchas" />
              <div>
                  <h1 className="text-5xl font-bold text-black max-sm:mt-20">Productos solidarios</h1>
                  <p className="py-6 text-justify mt-10 mb-10" style={{ color: `#6D7280` }}>Transformando descartes en productos innovadores.
                      Gracias a ellos nuestros EcoProductos son: más resistentes, impermeables, con diseño
                      únicos, ecofriendly, vegan friendly, más livianos y duraderos.</p>
                  <a href='https://www.leafsocial.shop/' target="_blank" className="btn bg-orange hover:bg-red-600 text-white mx-5">Conseguilas</a>
                  <Link to="/Productos" className="btn btn-ghost text-black">Ver más</Link>
              </div>
          </div>
      </div>
  )
}

export default FifthSection