import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
import './style.css'

>>>>>>> da1e04403cb73b999c07129a35afbb165965d5ea

const ItemDetail = ({item}) => {
  return (
    
<<<<<<< HEAD
    <div className="hero min-h-screen bg-white ">
      <div className=" flex-col lg:flex-row m-10 ">
        <div className="lg:mx-20 xl:mx-20">
        <img src={item.img} alt="blog-imagen" className="rounded mb-20 h-96 w-96"/>
          <h1 className="text-5xl font-bold text-stone-900 my-10 text-left">{item.title}</h1>

          <p className="py-6 text-stone-900 text-left montserrat">{item.content}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.secondContent}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.thirdContent}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.forthContent}</p>

          {/* <span className="py-6 text-stone-900">cantidad disponible: {item.stock} </span> */}
          {/* <h2 className='m-20 text-stone-900'>Precio {item.price} </h2> */}

=======
    <div className="hero bg-white  ">
      <div className="hero-content flex-col lg:flex-row m-10 ">
        <img src={item.img} alt="blog-imagen" className="rounded-lg mb-20 w-96 h-96"/>
        <div className="lg:mx-20 xl:mx-20">
          <h1 className="text-5xl font-bold text-stone-900 my-10 poppins">{item.name}</h1>
          <p className="py-6 text-stone-900 text-left montserrat">{item.content}</p>
          <div className="flex-col justify-self-start justify-items-start" >
            <p className="py-6 text-stone-900 text-left raleway">Los tratamientos para aplicar pueden ser: </p>
            <p className=" text-stone-900 mt-10 montserrat">Si quieres saber mas sobre que hace cada uno, haz click  
            <Link to="/" className="text-teal-500">aquí</Link> </p>
          </div>
>>>>>>> da1e04403cb73b999c07129a35afbb165965d5ea
          <div className="mt-10">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail