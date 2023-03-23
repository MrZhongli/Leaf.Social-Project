import React from 'react'
import { Link } from 'react-router-dom';
import { PinterestIcon } from 'react-share';
import FacebookIcon from './social-icons/Facebook-icon'
import IgIcon from './social-icons/Ig-icon'
import LinkedinIcon from './social-icons/Linkedin-icon'
import TwitterIcon from './social-icons/Twitter-icon'
import pinterest from '../assets/icon/Pinterest.png'
import leaf_logo_footer from '../assets/icon/leaf_logo_footer.png'
import './styles/styles.css'

const Footer = () => {
  return (

    <>
      <footer className="footer p-10 bg-footer " style={{ backgroundColor: `#1B1F27` }}>
        <div>
          <div className='py-10'>
            <img src={leaf_logo_footer} alt="logo" />
            <p className='pt-5'>Juntos podemos lograr el futuro que queremos!</p>
          </div>
          <span className="footer-title" style={{ color: `#BEBEBE` }}>Seguinos en nuestras redes</span>
          <div className='flex '>
            <a href='https://www.facebook.com/Leaf.social/' target="_blank"><FacebookIcon className="md:m-2 max-sm:m-1 " /></a>
            <a href='https://www.instagram.com/leaf.social/?hl=es' target="_blank"><IgIcon className="md:m-2 max-sm:m-1" /></a>
            <a href='https://ar.linkedin.com/company/leafsocial?original_referer=https%3A%2F%2Fwww.google.com%2F' target="_blank"><LinkedinIcon className="md:m-2 max-sm:m-1" /></a>
            <a href='https://twitter.com/Leaf_Social' target="_blank"><TwitterIcon className="md:m-2 max-sm:m-1" /></a>
            <a href='https://ar.pinterest.com/leafsocial/' target="_blank"><img src={pinterest} className="md:m-2 max-sm:m-1"></img></a>
          </div>
        </div>
        <div>
          <span className="footer-title " style={{ color: `#BEBEBE` }}>Empresa</span>
          <Link to="/Quienes_somos" className="link link-hover text-white">Equipo</Link>
          <Link to="/Quienes_somos" className="link link-hover text-white">Nosotros</Link>
          <Link to="/Productos" className="link link-hover text-white">Productos</Link>
          <Link to="/Blog" className="link link-hover text-white">Blog</Link>
        </div>
        <div>
          <span className="footer-title" style={{ color: `#BEBEBE` }}>Ayuda</span>
          <Link to='/Contactanos' className="link link-hover  text-white">Contacto</Link>
          <a className="link link-hover text-white">Soporte</a>
          <a className="link link-hover text-white">Terminos & Condiciones</a>
          <a className="link link-hover text-white" href='https://www.shop-leaf.com/preguntas-frecuentes/'>Preguntas Frecuentes</a>
        </div>
      </footer>
      <div className="footer footer-center p-4  text-base-content" style={{ backgroundColor: `#1B1F27` }} >
        <div>
          <p>©2023 LEAF - Todos los derechos reservados.</p>
        </div>
      </div>
    </>

  )
}

export default Footer