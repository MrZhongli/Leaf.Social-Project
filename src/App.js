// import { useEffect, useState } from 'react';
// import { BrowserRouter ,Route, Routes } from 'react-router-dom';
// import './App.css';
// import LandingPage from './components/LandingPage';
// // import logoLoader from './assets/icon/SvgComponent';
// import SvgComponent from './assets/icon/SvgComponent';
// import BlogContainer from './components/BlogContainer';
// import MainContainer from './components/MainContainer';


// function App() {
//   const [loading, setLoading] = useState(true)
    
// useEffect(() => {
//     setTimeout(()=>{
//         setLoading(false)
//     },2000)
    
// }, [])

//   return (
//     <>
//       {loading
//       ?
//         <SvgComponent className="rotate-center"/>
//       :
//         <div className="App">  
//         <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<LandingPage />}></Route>
//             <Route path='/blog' element={<BlogContainer />}></Route>
//             <Route path='/prueba' element={<MainContainer />}></Route>
            
//           </Routes>
//         </BrowserRouter>
//         </div>
//       }
//     </>
// );
// }

// export default App;


// version 2
// import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
// import './index.css';

// const anchors = ["firstPage", "secondPage", "thirdPage"];

// const App = () => (
//   <ReactFullpage
//     anchors={anchors}
//     navigation
//     navigationTooltips={anchors}
//     navigat
//     sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
//     onLeave={(origin, destination, direction) => {
//       console.log("onLeave event", { origin, destination, direction });
//     }}
//     render={({ state, fullpageApi }) => {
//       console.log("render prop change", state, fullpageApi);

//       return (
//         <div>
//           <div className="section h-screen"><h3>Section 1</h3></div>
//           <div className="section h-screen"><h3>Section 2</h3></div>
//           <div className="section h-screen"><h3>Section 3</h3></div>
//         </div>
//       );
//     }}
//   />
// );
// export default App;


import React, { useRef } from "react"
import MySection from "./components/MySection";
import './App.css';


function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  return (
    <>
    <div className="container">
      <MySection text="esto es un texto"/>
      <MySection text="eso es otro texto"/>
      <MySection text="Lo mismo que arriba pero mas atractivo"/>
    </div>
    </>
);
}

export default App;