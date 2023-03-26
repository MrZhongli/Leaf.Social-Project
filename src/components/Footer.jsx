import React from 'react'
import { Link } from 'react-router-dom';
import { PinterestIcon } from 'react-share';
import facebook from '../assets/icon/redes/facebook.svg'
import Ig from '../assets/icon/redes/ig.svg'
// import Ig from '../assets/logo_loader.svg'
import linkedin from '../assets/icon/redes/linkedin.svg'
import youtube from '../assets/icon/redes/youtube.svg'
import pinterest from '../assets/icon/redes/pinterest.svg'
// import TwitterIcon from './social-icons/Twitter-icon'
// import pinterest from '../assets/icon/Pinterest.png'
import leaf_logo_footer from '../assets/icon/leaf_logo_footer.png'
import './styles/styles.css'

const Footer = () => {
  return (

    <>
      <footer className="footer p-10 bg-footer " style={{ backgroundColor: `#1B1F27` }}>
        <div>
          <div className='py-10'>
            <img src={leaf_logo_footer} alt="logo" />
            <p className='pt-5 w-52 text-left'>¿Te gustaron nuestros productos y querés ser cliente mayorista? Comunicate con nosotros a <span className='text-red-500'>mayorista@leaf.social</span></p>
          </div>
          <span className="footer-title" style={{ color: `#BEBEBE` }}>Seguinos en nuestras redes</span>
          <div className='flex flex-wrap'>
            <a href='https://www.facebook.com/Leaf.social/' target="_blank" className='hover:scale-75 duration-150'><img className="w-9 h-9 m-4" src={facebook} alt="facebook" /></a>
            <a href='https://www.instagram.com/leaf.social/?hl=es' target="_blank" className='hover:scale-75 duration-150'><img className="w-9 h-9 m-4" src={Ig} alt="instagram" /></a>
            <a href='https://ar.linkedin.com/company/leafsocial?original_referer=https%3A%2F%2Fwww.google.com%2F' target="_blank" className='hover:scale-75 duration-150'><img className="w-9 h-9 m-4" src={linkedin} alt="linkedin" /></a>
            <a href='https://twitter.com/Leaf_Social' target="_blank" className='hover:scale-75 duration-150'><img className="w-9 h-9 m-4" src={youtube} alt="youtube" /></a>
            <a href='https://ar.pinterest.com/leafsocial/' target="_blank" className='hover:scale-75 duration-150 '><img src={pinterest} className="w-9 h-9 m-4"></img></a>
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