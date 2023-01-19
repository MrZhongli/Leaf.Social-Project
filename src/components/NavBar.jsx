// import React from 'react'

import React from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Leaf</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/"> Inicio</Link></li>
                    <li> <Link to="/Productos">Productos</Link></li>
                    <li> <Link to="/Quienes_somos"> Nosotros</Link></li>
                    <li> <Link to="/Contactanos"> Contacto</Link></li>
                    <div className="divider divider-horizontal"></div>
                    <li> <Link to="/blog"> blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;