import React from 'react'
import { Link } from 'react-router-dom'
import './styles/styles.css'
import ErrorImg from '../assets/Others/ErrorImg.jpg'

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-white" >
    <div className="hero "></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md flex flex-col justify-center">
        <img src={ErrorImg} alt="Error imagen" />
        <h1 className="mb-5 text-6xl font-bold text-black">404: Page Not Found</h1>
        <p className="mb-5 text-stone-500">I'm sorry, it looks like the resource you were trying to access is not available or does not exist. Please try again with a different URL or contact the website administrator for further assistance.</p>
        <Link to='/' className="btn bg-orange border-transparent m-auto hover:bg-red-500 hover:border-transparent w-48  text-white">Continuar</Link>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage;