import React from 'react'
import number1 from '../../assets/nosotros_section/Number1.png'
import number2 from '../../assets/nosotros_section/Number2.png'
import number3 from '../../assets/nosotros_section/Number3.png'
import '../styles/styles.css'

const SecondSection = () => {
  return (
        <div className="hero bg-white  ">
            <div className="hero-content text-center mt-20">
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold text-black">Como lo hacemos</h1>
                    <p className="py-6 text-slate-400  m-auto">Somos una empresa de triple impacto basada en el reciclado de silobolsas del campo en desuso para crear accesorios ecológicos.</p>
                    <div className='flex m-auto w-screen flex-wrap justify-center'>
                        <div className="card w-96 bg-white my-5 mx-5">
                            <figure className="px-10 pt-10">
                                <img src={number1} alt="impacto social" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Paso 1</h2>
                                <p>
                                EcoProductos elaborados con diversos materiales reciclados. Sumando a nuestro catálogo cada vez más descartes a rescatar y reutilizar, concientizando sobre el cuidado del ambiente.
                                </p>
                            </div>
                        </div>
                        {/* card2 */}
                        <div className="card w-96 bg-white my-5 mx-5">
                            <figure className="px-10 pt-10">
                                <img src={number2} alt="impacto social" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Paso 2</h2>
                                <p>Generamos oportunidades laborales de inclusión social a personas con discapacidad, mujeres en situación de vulnerabilidad y reinserción social para personas liberadas de su condena.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card w-96 bg-white my-5 mx-5 ">
                            <figure className="px-10 pt-10">
                                <img src={number3} alt="Producto con proposito" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Paso 3</h2>
                                <p>Con cada compra estás ayudando a todos los involucrados en el proceso de producción y colaborando con diversas ONGs para que puedan cumplir con su misión de erradicar la pobreza.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection