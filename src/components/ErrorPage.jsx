import React from 'react'
import { Link } from 'react-router-dom'
import './styles/styles.css'

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.cucinare.tv/wp-content/uploads/2020/08/Silobolsas.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl font-bold">Error 404</h1>
        <p className="mb-5">Estamos trabajando para una mejor experiencia</p>
        <Link to='/' className="btn bg-orange hover:bg-red-500 text-white">Ir al inicio</Link>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage;