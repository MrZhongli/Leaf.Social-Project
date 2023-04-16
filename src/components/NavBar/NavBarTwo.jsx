// import React from 'react'

import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Others/Logo';
import { ResponsiveNavbar } from './ResponsiveNavbar';
import '../styles/styles.css'
import isotipo from '../../assets/Others/isotipo_negro.svg';


const Navbar = () => {
   
    return (
        <div className= 'navbar drop-shadow-xl fixed bg-white shadow-sm rounded-none  z-10' >
            <div className="flex-1">
                <Link to='/' className="h-16 w-16 mx-4">
                    <img src={isotipo} alt="logo" />
                </Link>
            </div>
            <div className="flex-none  ">
                <ul className="max-sm:hidden menu menu-horizontal mx-20">
                    <li><Link to="/" className="text-black text-sm btn-ghost navbar_link"> Inicio</Link></li>
                    <li> <Link to="/Quienes_somos" className="text-black text-sm btn-ghost navbar_link"> Nosotros</Link></li>
                    <li> <Link to="/Productos" className="text-black text-sm btn-ghost navbar_link">Productos</Link></li>
                    <li> <Link to="/Contactanos" className="text-black text-sm btn-ghost navbar_link">  Contacto</Link></li>
                    {/* <div className="divider divider-horizontal divide-black"></div> */}
                    {/* <li> <Link to="/blog" className="text-black text-sm btn-ghost navbar_link"> Blog</Link></li> */}
                </ul>
                <ResponsiveNavbar/>
            </div>
        </div>
    );
};

export default Navbar;