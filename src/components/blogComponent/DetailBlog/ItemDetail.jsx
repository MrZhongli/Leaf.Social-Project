import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  return (
    
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content flex-col lg:flex-row m-10 ">
        <img src={item.img} alt="blog-imagen" className="rounded-lg mb-20"/>
        <div className="lg:mx-20 xl:mx-20">
          <h1 className="text-5xl font-bold text-stone-900 my-10 poppins">{item.name}</h1>

          <p className="py-6 text-stone-900 text-left montserrat">{item.content}</p>
          {/* <p className="py-2 text-stone-900 text-left montserrat">{item.description2}</p> */}

          <div className="flex-col justify-self-start justify-items-start" >
            <p className="py-6 text-stone-900 text-left raleway">Los tratamientos para aplicar pueden ser: </p>
            
            <p className=" text-stone-900 mt-10 montserrat">Si quieres saber mas sobre que hace cada uno, haz click  
            <Link to="/" className="text-teal-500">aquí</Link> </p>
          </div>
          {/* <span className="py-6 text-stone-900">cantidad disponible: {item.stock} </span> */}
          {/* <h2 className='m-20 text-stone-900'>Precio {item.price} </h2> */}

          <div className="mt-10">
            {/* <Link to={`/Contacto`} className='btn bg-cyan-400 btn-success btn-hero '> Solicitar Turno</Link> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemDetail