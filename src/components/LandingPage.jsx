import React from 'react';
import CountUpContainer from './CountUp/CountUpContainer';
import FirstSection from './landingPageComponent/FirstSection';
import SecondSection from './landingPageComponent/SecondSection';
import ThirdSection from './landingPageComponent/ThirdSection';
import Navbar from '../components/NavBar.jsx';
import FifthSection from './landingPageComponent/FifthSection';
import VideoSection from './landingPageComponent/VideoSection';
import SixSection from './Equipo Container/SixSection';

const LandingPage = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Navbar />
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/> 
    <CountUpContainer/>
    <FifthSection/>
    <VideoSection/>
    <SixSection/>
    </div>
    </>
  )
}

export default LandingPage