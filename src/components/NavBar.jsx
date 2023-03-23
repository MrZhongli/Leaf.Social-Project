// import React from 'react'

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Others/Logo';
import { ResponsiveNavbar } from './NavBar/ResponsiveNavbar';
import './styles/styles.css'

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
            <div className="flex-none">
                <ul className=" max-sm:hidden menu menu-horizontal mx-20">
                    <li><Link to="/" className={NavBar? 'text-black text-sm navbar_link btn-ghost ' : 'text-white text-sm navbar_link btn-ghost' }> Inicio</Link></li>
                    <li> <Link to="/Quienes_somos" className={NavBar? 'text-black text-sm navbar_link btn-ghost' : 'text-white text-sm navbar_link btn-ghost' }> Nosotros</Link></li>
                    <li> <Link to="/Productos" className={NavBar? 'text-black text-sm navbar_link btn-ghost' : 'text-white text-sm navbar_link btn-ghost' }>Productos</Link></li>
                    <li> <Link to="/Contactanos" className={NavBar? 'text-black text-sm navbar_link btn-ghost' : 'text-white text-sm navbar_link btn-ghost' }>  Contacto</Link></li>
                </ul>
                <ResponsiveNavbar/>
            </div>
        </div>
    );
};

export default Navbar;