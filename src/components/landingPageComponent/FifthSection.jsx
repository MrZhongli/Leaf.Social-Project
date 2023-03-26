import React, { useEffect } from 'react'
import '../styles/styles.css'
import rectangle from '../../assets/Rectangle.png'
import Alpargauchas from '../../assets/landing/EveryDay-Pink.png'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FifthSection = () => {
    useEffect(() => {
      Aos.init();
     })
    return (
      <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={rectangle} className=" relative lg:left-52 md:left-52 max-sm:left-20" alt="sombra"  />
              <img src={Alpargauchas} className="absolute md:right-10 mt-56 max-sm:mb-96 max-sm:pb-96 md:mb-52" alt="Alpargauchas" data-aos = "fade-left" />
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