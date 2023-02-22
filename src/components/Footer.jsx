import React from 'react'
import { Link } from 'react-router-dom';
import { PinterestIcon } from 'react-share';
import FacebookIcon from './social-icons/Facebook-icon'
import IgIcon from './social-icons/Ig-icon'
import LinkedinIcon from './social-icons/Linkedin-icon'
import TwitterIcon from './social-icons/Twitter-icon'
import pinterest from '../assets/icon/Pinterest.png'
import './styles/styles.css'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-footer " style={{backgroundColor:`#1B1F27`}}>
  <div>
    <span className="footer-title" style={{color:`#BEBEBE`}}>Seguinos en nuestras redes</span>
    <div className='flex '>
    <a href='https://www.facebook.com'><FacebookIcon className="ms-2"/></a> 
    <a href='https://www.facebook.com'><IgIcon className="mx-2"/></a> 
    <a href='https://www.facebook.com'><LinkedinIcon className="mx-2"/></a> 
    <a href='https://www.facebook.com'><TwitterIcon className="mx-2"/></a> 
    <a href='https://www.facebook.com'><img src={pinterest}></img></a> 
    </div> 
  </div> 
  <div>
    <span className="footer-title " style={{color:`#BEBEBE`}}>Empresa</span> 
    <Link to="/Nosotros" className="link link-hover text-white">Equipo</Link>
    <Link to="/Nosotros" className="link link-hover text-white">Nosotros</Link>
    <Link to="/Productos" className="link link-hover text-white">Productos</Link>
    <Link to="/Blog" className="link link-hover text-white">Blog</Link>
  </div> 
  <div>
      <span className="footer-title" style={{color:`#BEBEBE`}}>Ayuda</span> 
    <Link to='/Contactanos' className="link link-hover  text-white">Contacto</Link> 
    <a className="link link-hover text-white">Soporte</a> 
    <a className="link link-hover text-white">Terminos & Condiciones</a>
    <a className="link link-hover text-white" href='https://www.shop-leaf.com/preguntas-frecuentes/'>Preguntas Frecuentes</a>
  </div> 
  {/* <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Ingresa tu correo</span>
      </label> 
      <div className="">
        <input type="text" placeholder="ejemplo@site.com" className="input input-bordered w-full pr-16" /> 
      </div>
        <button className="btn bg-orange mt-5 rounded-l-none text-white">Subscribete </button>
    </div>
  </div> */}
</footer>
  )
}

export default Footer