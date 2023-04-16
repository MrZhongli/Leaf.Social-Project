import React, { useEffect } from 'react'
import '../styles/styles.css'
import rectangle from '../../assets/Rectangle.png'
import Alpargauchas from '../../assets/landing/EcoMochila.PNG'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FifthSection = () => {
    useEffect(() => {
      Aos.init();
     })
    return (
        <div className="hero  bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse ">
            <img src={rectangle} className="max-sm:hidden relative lg:left-44 md:left-52 max-sm:left-20" alt="sombra" />
            <img src={Alpargauchas} className="max-sm:hidden absolute md:right-10 mt-56 max-sm:mb-96 max-sm:pb-96 md:mb-52 w-1/3" alt="Alpargauchas" data-aos="fade-left" />
            <img src={Alpargauchas} className="max-sm:block hidden " alt="Alpargauchas" data-aos="fade-left" />
            <div className='flex flex-col justify-start'>
                <h1 className="text-5xl font-bold text-black text-left max-sm:text-center max-sm:text-4xl">Productos solidarios</h1>
                <p className="py-6 text-justify mt-10 mb-10 max-sm:m-5 max-sm:text-center" style={{ color: `#6D7280` }}>Transformando descartes en productos innovadores.
                    Gracias a ellos nuestros EcoProductos son: más resistentes, impermeables, con diseño
                    únicos, ecofriendly, vegan friendly, más livianos y duraderos.</p>
                <Link to="/Productos" href='https://www.leafsocial.shop/' target="_blank" rel='noreferrer' className="btn bg-orange normal-case hover:bg-red-600 border-transparent hover:border-transparent text-white max-sm:m-auto w-32">Ver más</Link>
                {/* <Link to="/Productos" className="btn btn-ghost text-black">Ver más</Link> */}
            </div>
        </div>
    </div>
  )
}

export default FifthSection