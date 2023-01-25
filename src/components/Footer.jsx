import React from 'react'
import FacebookIcon from './social-icons/Facebook-icon'
import IgIcon from './social-icons/Ig-icon'
import LinkedinIcon from './social-icons/Linkedin-icon'
import TwitterIcon from './social-icons/Twitter-icon'
import './Style.css'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-footer text-base-content">
  <div>
    <span className="footer-title">Seguinos en nuestras redes</span>
    <div className='flex '>
    <FacebookIcon className="ms-2"/> 
    <IgIcon className="mx-2"/>
    <LinkedinIcon className="mx-2"/>
    <TwitterIcon className="mx-2"/>
    </div> 
  </div> 
  <div>
    <span className="footer-title">Empresa</span> 
    <a className="link link-hover">Equipo</a> 
    <a className="link link-hover">Partners</a> 
    <a className="link link-hover">Embajadoras</a> 
    <a className="link link-hover">blog </a>
  </div> 
  <div>
      <span className="footer-title">Ayuda</span> 
    <a className="link link-hover">Contacto</a> 
    <a className="link link-hover">Soporte</a> 
    <a className="link link-hover">Terminos & Condiciones</a>
    <a className="link link-hover">Politicas de Privacidad</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Ingresa tu correo</span>
      </label> 
      <div className="">
        <input type="text" placeholder="ejemplo@site.com" className="input input-bordered w-full pr-16" /> 
      </div>
        <button className="btn btn-primary mt-5 rounded-l-none">Subscribete </button>
    </div>
  </div>
</footer>
  )
}

export default Footer