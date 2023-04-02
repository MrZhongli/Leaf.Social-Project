import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import facebook from '../assets/icon/redes/facebook.svg'
import Ig from '../assets/icon/redes/ig.svg'
import linkedin from '../assets/icon/redes/linkedin.svg'
import youtube from '../assets/icon/redes/youtube.svg'
import pinterest from '../assets/icon/redes/pinterest.svg'
import leaf_logo_footer from '../assets/Others/isotipo_blanco.svg'
import './styles/styles.css'

const Footer = () => {

  const [Input, setInput] = useState(false)

  function handleClick(){
    setInput(true)
  }

  return (
    <>
      <footer className="footer p-5 bg-footer " style={{ backgroundColor: `#1B1F27` }}>
        <div>
          <div className='mx-10'>
            <img src={leaf_logo_footer} alt="logo" className='w-32 h-32' />
            <p className='pt-5 max-sm:w-32 md:w-72 text-justify' style={{ color: `#9D9EA1` }}>¡Juntos podemos lograr el futuro que queremos! Sumate al cambio que el mundo necesita.</p>
          </div>
          
        </div>
        <div className='py-10'>
          <span className="footer-title " style={{ color: `#9D9EA1` }}>Conocenos</span>
          <Link to="/Quienes_somos" className="link link-hover text-white">Nosotros</Link>
          <Link to="/Productos" className="link link-hover text-white">Productos</Link>
          <a href='?' rel='noreferrer' className="link link-hover text-white">Prensa</a>
          <Link to="/Blog" className="link link-hover text-white">Blog</Link>
        </div>
        <div className='sm:py-0 md:py-10'>
          <span className="footer-title " style={{ color: `#9D9EA1` }}>Hablemos</span>
          <Link to='/Contactanos' className="link link-hover  text-white">Escribinos</Link>
          <a className="link link-hover text-white" href='https://www.shop-leaf.com/preguntas-frecuentes/'>Preguntas Frecuentes</a>
          <a className="link link-hover text-white" href='https://www.shop-leaf.com/preguntas-frecuentes/'>Dónde comprar</a>
        </div>
        <div className='sm:py-0 md:py-10'>
          <span className="footer-title " style={{ color: `#9D9EA1` }}>¡No te pierdas de nada!</span>
          <div className="form-control ">
            <span className="label-text" style={{ color: `#9D9EA1` }}>Suscribite a nuestro NewsLetter.</span>
            {
              Input 
              ?
              <div className='mt-5'>
                <p className='font-bold'>¡Listo! :)</p>
                <p>Gracias por <span className='font-bold'>eligir ser parte</span></p>
                <p>de esta comunidad.</p>
              </div>
              :
              <div className="relative right-2 mt-5">
              <input type="text" placeholder="Escribe tu correo"  className="input input-bordered md:w-full " />
              <button className="btn bg-orange hover:bg-red-500 rounded-l my-5 duration-200 text-white normal-case md:w-full" onClick={handleClick}>Quiero sumarme</button>
              </div>
          }
          </div>
        </div>
      </footer>
      <div className='flex justify-start flex-wrap' style={{ backgroundColor: `#1B1F27` }} >
        <div className='flex flex-col flex-wrap mx-5'>
        <span className="footer-title text-left mx-10" style={{ color: `#9D9EA1` }}>Encontranos en</span>
          <div className='flex flex-wrap px-5'>
            <a href='https://www.facebook.com/Leaf.social/' target="_blank" rel='noreferrer'  className='hover:scale-75 duration-150'><img className="w-6 h-6 m-4" src={facebook} alt="facebook" /></a>
            <a href='https://www.instagram.com/leaf.social/?hl=es' target="_blank" rel='noreferrer' className='hover:scale-75 duration-150'><img className="w-6 h-6 m-4 " src={Ig} alt="instagram" /></a>
            <a href='https://ar.linkedin.com/company/leafsocial?original_referer=https%3A%2F%2Fwww.google.com%2F' rel='noreferrer' target="_blank" className='hover:scale-75 duration-150'><img className="w-6 h-6 m-4" src={linkedin} alt="linkedin" /></a>
            <a href='https://twitter.com/Leaf_Social' target="_blank" rel='noreferrer' className='hover:scale-75 duration-150'><img className="w-6 h-6 m-4" src={youtube} alt="youtube" /></a>
            <a href='https://ar.pinterest.com/leafsocial/' target="_blank" rel='noreferrer' className='hover:scale-75 duration-150 '><img src={pinterest} className="w-6 h-6 m-4" alt='pinterest'></img></a>
          </div>

        </div>
      <p className='w-96 text-left md:mx-44 text-white' >¿Querés ser cliente mayorista? Comunicate con nosotros a <span className='text-red-500'>mayorista@leaf.social</span></p>
      </div>
      <div className="footer footer-center p-4  text-base-content" style={{ backgroundColor: `#1B1F27` }} >
        <div>
          <p className='text-base-600' style={{ color: `#9D9EA1` }}>©2023 LEAF - Todos los derechos reservados.</p>
        </div>
      </div>
    </>

  )
}

export default Footer