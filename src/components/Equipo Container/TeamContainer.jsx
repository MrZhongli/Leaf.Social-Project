import React from 'react'
import Navbar from '../NavBar'
import EightSection from './EightSection'
import { FifthSection } from './FifthSection'
import FirstSection from './FirstSection'
import { ForthSection } from './ForthSection'
import NineSection from './NineSection'
import SecondSectionTeam from './SecondSection'
import SevenSection from './SevenSection'
import TeenSection from './TeenSection'
import { ThirdSectionTeam } from './ThirdSection'
import ThirdSection from '../landingPageComponent/ThirdSection'

const TeamContainer = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Navbar/>
    <FirstSection/>
    <SevenSection/>
    <ThirdSectionTeam/>
    <SecondSectionTeam/>
    <FifthSection/>
    <ThirdSection/>
    <EightSection/>
    <ForthSection/>
    <NineSection/>
    <TeenSection/>
    </div>
    </>
  )
}

export default TeamContainer