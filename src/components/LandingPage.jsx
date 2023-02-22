// import React, { useRef } from "react"
// import MySection from "./MySection";
// import '../App.css';
// // import Navbar from "./components/NavBar";


// function LandingPage() {
//   const section1 = useRef();
//   const section2 = useRef();
//   const section3 = useRef();

//  const scrollTo=(section)=>{
//     section.current.scrollIntoView({
//       behavior:"smooth"});
//   }



//   return (
//     <>
  
//     <div className="container">
//       <div ref={section1}>
//       <MySection props="esto es un texto"
//       scrollTo={scrollTo}  
//       goToSectionRef={section2}
//       showArrow={true} />
//       </div>
//       <div ref={section2}>
//       <MySection props="eso es otro texto"  
//       scrollTo={scrollTo} 
//       goToSectionRef={section3}
//       showArrow={true} />
//       </div>
//       <div ref={section3}>
//       <MySection props="Lo mismo que arriba pero mas atractivo"
//        showArrow={false}/>
//       </div>
//     </div>
//     </>
// );
// }

// export default LandingPage;
// // Archivo Css 

import React from 'react';
import HomeBlogCard from './blogComponent/HomeBlog/HomeBlogCard';
import ContactContainer from './ContactContainer';
import CountUpContainer from './CountUp/CountUpContainer';
import FirstSection from './landingPageComponent/FirstSection';
import SecondSection from './landingPageComponent/SecondSection';
import ThirdSection from './landingPageComponent/ThirdSection';
import Navbar from '../components/NavBar.jsx';
import { ForthSection } from './landingPageComponent/ForthSection';
import FifthSection from './landingPageComponent/FifthSection';

const LandingPage = () => {
  return (
    <>
    <div className='overflow-x-hidden'>

    <Navbar/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/> 
    <CountUpContainer/>
    {/* <ForthSection/> */}
    <FifthSection/>
    <HomeBlogCard/>
    {/* <ContactContainer/> */}
    </div>
    </>
  )
}

export default LandingPage