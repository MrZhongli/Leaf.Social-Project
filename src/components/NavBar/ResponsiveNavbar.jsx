import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/styles.css'


export const ResponsiveNavbar = () => {

    const [Active, setActive] = useState(false)
    const showMenu = () =>{
        setActive(!Active)
    }

  return (
    <div className='lg:hidden xl:hidden md:hidden sm:hidden '>
          <label className="btn btn-circle bg-orange text-white hover:bg-red-900 swap swap-rotate z-50">
              {/* <!-- this hidden checkbox controls the state --> */}
              <input type="checkbox" onClick={showMenu} />
              {/* <!-- hamburger icon --> */}
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              {/* <!-- close icon --> */}
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
          </label>

        { Active ?
        <ul className='fixed gap-3 flex flex-col align-center items-center justify-start py-32  inset-0 left-28 bg-black h-screen  duration-75 slide-left w-full '>
        <li>
            <Link to="/" className='btn  text-white btn-ghost '>inicio</Link>
        </li>
        <li>
            <Link to="/Quienes_somos" className='btn text-white btn-ghost '>Nosotros</Link>
        </li>
        <li>
            <Link to="/Productos" className='btn text-white btn-ghost '>Productos</Link>
        </li>
        <li>
            <Link to="/Contactanos" className=' btn btn-ghost text-white '>Contacto</Link>
        </li>
        {/* <li>
            <Link to="/Blog" className='btn btn-ghost text-white'>Blog </Link>
        </li> */}
    </ul>
        : 
            <div></div>
        }
        
    </div>
  )
}
