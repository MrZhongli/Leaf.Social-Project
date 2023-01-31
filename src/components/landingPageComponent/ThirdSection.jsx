import React from 'react'
import GearImg from '../../assets/Gear_img.png'
import TshitImg from '../../assets/Tshirt_card.png'
import LeafCard from '../../assets/Others/Leaf-card-img'
import '../styles/styles.css'

const ThirdSection = () => {
  return (
    <div className="hero  bg-white snap-start">
    <div className="hero-content text-center">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-black">Triple Impacto</h1>
        <p className="py-6 text-slate-400 w-80 m-auto">Somos una empresa de triple impacto basada en el reciclado de silobolsas del campo en desuso para crear accesorios ecológicos.</p>
        <div className='flex m-auto w-screen flex-wrap justify-center'>
          <div className="card w-96 bg-white shadow-xl my-5 mx-5">
            <figure className="px-10 pt-10">
              <LeafCard/>
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Impacto ambiental</h2>
              <p>EcoProductos elaborados con diversos materiales reciclados. Sumando a nuestro catálogo cada vez más descartes a rescatar y reutilizar, concientizando sobre el cuidado del ambiente.</p>
            </div>
          </div>
          {/* card2 */}
          <div className="card w-96 bg-white shadow-xl my-5 mx-5">
            <figure className="px-10 pt-10">
              <img src={GearImg} alt="impacto social"/>
            </figure> 
            <div className="card-body items-center text-center">
              <h2 className="card-title">Impacto social</h2>
              <p>Generamos oportunidades laborales y de inclusión social a personas con discapacidad, mujeres en situación de vulnerabilidad, así como de reinserción social para personas que fueron liberadas luego de haber cumplido su condena.</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-96 bg-white shadow-xl my-5 mx-5 ">
            <figure className="px-10 pt-10">
              <img src={TshitImg} alt="Producto con proposito"/>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Productos con proposito</h2>
              <p>Con cada compra estás ayudando a todos los involucrados en el proceso de producción y colaborando con diversas ONGs para que puedan cumplir con su misión de erradicar la pobreza.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ThirdSection