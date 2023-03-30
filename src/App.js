// import { useState } from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import './App.css';
// import LandingPage from './components/LandingPage';
import TeamContainer from './components/Equipo Container/TeamContainer';
import GaleryContainer from './components/GaleryContainer';
import ContactContainer from './components/ContactContainer'
import { ContainerProductDetail } from './components/Product component/Detail products/ContainerProductDetail';
import Footer from './components/Footer';
import ScrollToTop from './Hooks/ScrollToTop';
import ErrorPage from './components/ErrorPage';
import { useEffect, useState, lazy, Suspense } from 'react';
import logo from './assets/Others/isotipo_blanco.svg'

// 
const LandingPage = lazy(() => import("./components/LandingPage"));
// const TeamContainer = lazy(() => import("./components/Equipo Container/TeamContainer"));
// const GaleryContainer = lazy(() => import("./components/GaleryContainer"));
// const ContactContainer = lazy(() => import("./components/ContactContainer"));
// const ErrorPage = lazy(() => import("./components/ErrorPage"));


function App() {
  const [loading, setLoading] = useState(true)
    
useEffect(() => {
    setTimeout(()=>{
        setLoading(false)
    },1500)
}, [])


  return (
    <>
    {
      loading ?
      <div className='bg-white h-screen flex flex-col justify-center items-center' style={{backgroundColor:`#EB595A`}}>
        <img src={logo} alt='cover' className='scale-up-center w-32'/>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      :
          <div className="App">
            <Suspense fallback={
                <div className='bg-white h-screen flex flex-col justify-center items-center' style={{backgroundColor:`#EB595A`}}>
                <img src={logo} alt='cover' className='scale-up-center w-32'/>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            }>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path='/' element={<LandingPage />}></Route>
                  <Route path='/Quienes_somos' element={<TeamContainer />}></Route>
                  <Route path='/Productos/:slug' element={<ContainerProductDetail />}></Route>
                  <Route path='/Productos' element={<GaleryContainer />}></Route>
                  <Route path='/Contactanos' element={<ContactContainer />}></Route>
                  {/* <Route path='/blog' element={<BlogContainer />}></Route> */}
                  {/* <Route path='/blog/:slug' element={<ContainerDetail />}></Route> */}
                  <Route path='*' element={<ErrorPage />}></Route>
                </Routes>
                <Footer />
              </BrowserRouter>
            </Suspense>
    </div>
      }
    </>
);
}

export default App;


