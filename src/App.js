import { useEffect, useState } from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
// import logoLoader from './assets/icon/SvgComponent';
import SvgComponent from './assets/icon/SvgComponent';
import BlogContainer from './components/blogComponent/BlogContainer';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import GaleryContainer from './components/GaleryContainer';
import TeamContainer from './components/Equipo Container/TeamContainer';
// import MainContainer from './components/MainContainer';


function App() {
  const [loading, setLoading] = useState(true)
    
useEffect(() => {
    setTimeout(()=>{
        setLoading(false)
    },2000)
    
}, [])

  return (
    <>
      {loading
      ?
        <SvgComponent className="rotate-center"/>
      :
        <div className="App">  
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/blog' element={<BlogContainer />}></Route>
            <Route path='/galeria' element={<GaleryContainer />}></Route>
            <Route path='/Quienes_somos' element={<TeamContainer />}></Route>
            {/* <Route path='/prueba' element={<MainContainer />}></Route> */}
            
          </Routes>
          <Footer/>
        </BrowserRouter>
        </div>
      
      }
    </>
);
}

export default App;


