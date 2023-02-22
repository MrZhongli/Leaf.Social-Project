import React from 'react'
// import { ForthSection } from '../landingPageComponent/ForthSection'
import Navbar from '../NavBar'
import { FifthSection } from './FifthSection'

import FirstSection from './FirstSection'
import { ForthSection } from './ForthSection'
import SecondSection from './SecondSection'
import SixSection from './SixSection'
import { ThirdSection } from './ThirdSection'

const TeamContainer = () => {
  return (
    <>
    <Navbar/>
    <FirstSection/>
    <ThirdSection/>
    <SecondSection/>
    <FifthSection/>
    <ForthSection/>
    <SixSection/>
    </>
  )
}

export default TeamContainer