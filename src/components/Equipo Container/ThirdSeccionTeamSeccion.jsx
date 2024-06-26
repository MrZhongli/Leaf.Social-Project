import React from 'react'
// import GearImg from '../../assets/users.png'
// import TshitImg from '../../assets/Tshirt.png'
// import saveEarth from '../../assets/Others/Impacto_económico_icon.svg'
import TshitImg  from '../../assets/Others/Impacto_económico_icon.svg'
import Impacto_social from '../../assets/Others/Impacto_social.svg'
import impacto_ambiental from '../../assets/Others/Impacto_ambiental.svg'
// import LeafCard from '../../assets/Others/Leaf-card-img'
import '../styles/styles.css'

const ThirdSectionTeamSeccion = () => {
  return (
    <div className="hero bg-white  ">
      <div className="  text-center mt-20">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-black max-sm:text-5xl max-sm:mx-1">Triple Impacto</h1>
          <p className=" text-center mt-10 max-sm:mx-10  " style={{ color: `#4A505C` }}>Somos una empresa de triple impacto que crea productos solidarios hechos </p>
          <p className=" text-center mb-10 max-sm:mx-10" style={{ color: `#4A505C` }}> con materiales
            reciclados, potenciando la inclusión social en Argentina. </p>

          <div className='flex  w-screen flex-wrap justify-center'>
            <div className="card w-96 max-sm:w-72 bg-white shadow-xl my-5 mx-5 ">
              <figure className="px-10 pt-10">
                {/* <LeafCard/> */}
                <img src={impacto_ambiental} className='w-20 h-20' alt="impacto social" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black">Impacto ambiental</h2>
                <p className='text-center mt-2' style={{ color: `#4A505C` }}>EcoProductos elaborados con diversos materiales reciclados. Sumando a nuestro catálogo cada vez más descartes a rescatar y reutilizar, concientizando sobre el cuidado del ambiente.</p>
              </div>
            </div>
            {/* card2 */}
            <div className="card w-96 max-sm:w-72 bg-white shadow-xl my-5 mx-5">
              <figure className="px-10 pt-10">
                <img src={Impacto_social} className='w-20 h-20' alt="impacto social" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black">Impacto social</h2>
                <p className='text-center mt-2' style={{ color: `#4A505C` }}>Generamos oportunidades laborales y de inclusión social a personas con
                  discapacidad, mujeres en situación de vulnerabilidad, así como de reinserción social para
                  personas que fueron liberadas luego de haber cumplido su condena.</p>
              </div>
            </div>
            {/* card 3 */}
            <div className="card w-96 max-sm:w-72 bg-white shadow-xl my-5 mx-5 ">
              <figure className="px-10 pt-10">
                <img src={TshitImg} className='w-20 h-20' alt="Producto con proposito" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black">Impacto económico</h2>
                <p className='text-center mt-2' style={{ color: `#4A505C` }}>Con cada compra estás ayudando a que los otros dos impactos sean
                  sostenibles en el tiempo, colaborando con el proceso de producción y con diversas ONGs
                  para que cumplan su misión.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Link to="/Quienes_somos" className="btn bg-orange normal-case font-bold hover:bg-red-500 hover:border-transparent border-transparent  text-white mt-20">Conocé más</Link> */}
      </div>
    </div>
  )
}

export default ThirdSectionTeamSeccion