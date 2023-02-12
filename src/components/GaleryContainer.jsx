import React from 'react'
import Navbar from './NavBar';
import MainSection from './Product component/MainSection';
import ProductContainer from './Product component/ProductContainer';
import ProductItems from './Product component/ProductItems';
import './styles/styles.css';
// import bgProduct from '../assets/product_section/product-bg-main.png'


const GaleryContainer = () => {
  return (
    <>
    <Navbar/>
    <MainSection/>
    <ProductContainer/>
    </>
  
  )
}

export default GaleryContainer