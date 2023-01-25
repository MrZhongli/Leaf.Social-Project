import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const ItemDetail = ({item}) => {
  return (
    
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
          <div className="mt-10">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail