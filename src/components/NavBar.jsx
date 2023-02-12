// import React from 'react'

import React from 'react';
import { useState } from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logo from '../assets/Others/Logo';

const Navbar = () => {
   
    const [NavBar, setNavBar] = useState(false)

    const chanceBackground = ()=>{
        if(window.scrollY >= 680){
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', chanceBackground)

    return (
        <div className={NavBar ? 'navbar drop-shadow-xl fixed bg-white shadow-sm rounded-none  z-10 duration-75' : 'navbar  bg-transparent  rounded-none z-10 fixed duration-200'}>
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost  "><Logo /></Link>
            </div>
            <div className="flex-none  ">
                <ul className="menu menu-horizontal mx-20">
                    <li><Link to="/" className={NavBar? 'text-black text-sm' : 'text-white text-sm' }> Inicio</Link></li>
                    <li> <Link to="/Quienes_somos" className={NavBar? 'text-black text-sm' : 'text-white text-sm' }> Nosotros</Link></li>
                    <li> <Link to="/Productos" className={NavBar? 'text-black text-sm' : 'text-white text-sm' }>Productos</Link></li>
                    <li> <Link to="/Contactanos" className={NavBar? 'text-black text-sm' : 'text-white text-sm' }>  Contacto</Link></li>
                    {/* <div className="divider divider-horizontal divide-black"></div> */}
                    <li> <Link to="/blog" className={NavBar? 'text-black text-sm' : 'text-white text-sm' }> Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;