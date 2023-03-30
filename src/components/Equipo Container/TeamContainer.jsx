import React from 'react'
import Navbar from '../NavBar'
import EightSection from './EightSection'
import { FifthSection } from './FifthSection'
import FirstSection from './FirstSection'
import { ForthSection } from './ForthSection'
import NineSection from './NineSection'
import SecondSection from './SecondSection'
import SevenSection from './SevenSection'
import TeenSection from './TeenSection'
import { ThirdSection } from './ThirdSection'

const TeamContainer = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Navbar/>
    <FirstSection/>
    <SevenSection/>
    <EightSection/>
    <ThirdSection/>
    <SecondSection/>
    <FifthSection/>
    <ForthSection/>
    <TeenSection/>
    <NineSection/>
    </div>
    </>
  )
}

export default TeamContainer