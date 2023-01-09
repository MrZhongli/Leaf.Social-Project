import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';


const LandingPage = () => {
  return (
    <div>
      <header className='hero-section'>
      <h1>Bienvenidos a Productos Estéticos</h1>
      {/* <!-- Logo --> */}
      <Link className='logo-container'>
        {/* <img alt='Logo' src="https://olaiamerino.com/wp-content/uploads/2020/02/log o-02.png" /> */}
        <img alt='Logo' src="../assets/RRRecycle_x300.png" />
      </Link>
      </header>
      <nav className='navbar'> 
        <Link className='inicio-links' to='/inicio'>Inicio</Link> 
        <Link className='productos-links' to='/blog'>Blog </Link> 
        <Link className='acerca-links' to='/prueba'>Prueba </Link> 
        <Link className='Ubicacion-links' to='/ubicacion'>Ubicación </Link> 
      </nav>
      <section className='landing-content'>
      <h2>Leaf, la moda compatible con el planeta: moda sostenible hecha con materiales reciclables</h2>
        <p>¡Únete a la ola creciente del reciclaje con moda! Explora la tendencia creciente de la moda respetuosa con el medio ambiente y recicla
           productos de moda de maneras creativas para crear prendas únicas. Empieza con las camisetas impresas, impulsa tus recursos con jeans reciclados 
           y den vida nueva a tus diseños con bolsos ecológicos. Incluso divertirte puede ser sostenible con accesorios reciclados. Así que recoge, pinta y 
           crea tus propias prendas de moda y sé parte de la recomposición de la moda respetuosa con el medio ambiente. </p> 
      </section>
    </div> 
  )
}

export default LandingPage;

// Archivo Css 

