// import React from 'react'

import React from 'react';
import { useState } from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logo from '../assets/Others/Logo';

const Navbar = () => {
   
    const [NavBar, setNavBar] = useState(false)

    const chanceBackground = ()=>{
        if(window.scrollY >= 500){
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
                    <li><Link to="/" className="text-black text-sm"> Inicio</Link></li>
                    <li> <Link to="/Productos" className="text-black text-sm">Productos</Link></li>
                    <li> <Link to="/Quienes_somos" className="text-black text-sm"> Nosotros</Link></li>
                    <li> <Link to="/Contactanos" className="text-black text-sm">  Contacto</Link></li>
                    {/* <div className="divider divider-horizontal divide-black"></div> */}
                    <li> <Link to="/blog" className="text-black text-sm"> Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;