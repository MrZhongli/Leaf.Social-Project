import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import facebook from '../assets/icon/redes/facebook.svg'
import Ig from '../assets/icon/redes/ig.svg'
import linkedin from '../assets/icon/redes/linkedin.svg'
import youtube from '../assets/icon/redes/youtube.svg'
import pinterest from '../assets/icon/redes/pinterest.svg'
import leaf_logo_footer from '../assets/Others/isotipo_blanco.svg'
import emailjs from '@emailjs/browser';
import './styles/styles.css'

const Footer = () => {

  const [Input, setInput] = useState(false)

  function handleClick(){
    setInput(true)
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bt2xcod', 'template_2dh6alb', form.current, '45rMnPbZS5c5NRePz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <footer className="footer p-5 bg-footer " style={{ backgroundColor: `#1B1F27` }}>
        <div>
          <div className='mx-10 max-sm:mx-0 max-sm:py-0 flex flex-col max-sm:items-center max-sm:m-auto'>
            <img src={leaf_logo_footer} alt="logo" className='w-32 h-32 ' />
            <p className='pt-5 md:w-72 text-justify max-sm:text-left' style={{ color: `#9D9EA1` }}>¡Juntos podemos lograr el futuro que queremos! Sumate al cambio que el mundo necesita.</p>
          </div>
          
        </div>
        <div className='py-10 max-sm:py-0 flex flex-col max-sm:items-center max-sm:m-auto'>
          <span className="footer-title " style={{ color: `#9D9EA1` }}>Conocenos</span>
          <Link to="/Quienes_somos" className="link link-hover text-white">Nosotros</Link>
          <Link to="/Productos" className="link link-hover text-white">Productos</Link>
          <a href='?' rel='noreferrer' className="link link-hover text-white">Prensa</a>
          <Link to="/Blog" className="link link-hover text-white">Blog</Link>
        </div>
        <div className='py-10 max-sm:py-0 flex flex-col max-sm:items-center max-sm:m-auto'>
          <span className="footer-title " style={{ color: `#9D9EA1` }}>Hablemos</span>
          <Link to='/Contactanos' className="link link-hover  text-white">Escribinos</Link>
          <a className="link link-hover text-white" href='https://www.shop-leaf.com/preguntas-frecuentes/'>Preguntas Frecuentes</a>
          <a className="link link-hover text-white" href='https://www.shop-leaf.com/preguntas-frecuentes/'>Dónde comprar</a>
        </div>
        <div className='sm:py-0 md:py-10'>
          <span className="footer-title " style={{ color: `#9D9EA1` }}>¡No te pierdas de nada!</span>
          <div className="form-control ">
            <span className="label-text text-left" style={{ color: `#9D9EA1` }}>Suscribite a nuestro NewsLetter.</span>
            {
              Input 
              ?
              <div className='mt-5'>
                <p className='font-bold text-white'>¡Listo! :)</p>
                <p className='text-white'>Gracias por <span className='text-white font-bold'>eligir ser parte</span></p>
                <p className='text-white '>de esta comunidad.</p>
              </div>
              :
              <form ref={form} onSubmit={sendEmail}>
              <div className="relative right-2 mt-5">
              <input name="email" type="email" placeholder="Escribe tu correo"  className="input input-bordered md:w-full " />
              <button className="btn bg-orange hover:border-transparent hover:bg-red-500 rounded-l my-5 duration-200 border-transparent text-white normal-case md:w-full" onClick={handleClick}>Quiero sumarme</button>
              </div>
              </form>
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
            <a href='https://www.youtube.com/@rezet.global' target="_blank" rel='noreferrer' className='hover:scale-75 duration-150'><img className="w-6 h-6 m-4" src={youtube} alt="youtube" /></a>
            <a href='https://ar.pinterest.com/leafsocial/' target="_blank" rel='noreferrer' className='hover:scale-75 duration-150 '><img src={pinterest} className="w-6 h-6 m-4" alt='pinterest'></img></a>
          </div>
        </div>
      <p className='w-96 text-left max-sm:text-center max-sm:py-10 md:mx-52 text-white' >¿Querés ser cliente mayorista? Comunicate con nosotros a <span className='text-red-500'>mayorista@leaf.social</span></p>
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