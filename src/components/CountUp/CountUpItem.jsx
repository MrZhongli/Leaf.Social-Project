import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import '../styles/styles.css'

const CountUpItem = (props) => {
    const [counterOn, setCounterOn] = useState(false)

  return (

    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit ={()=> setCounterOn(false)} >    
          <div className='text-black  flex justify-center align-items-center'>
              <h1>
                  {counterOn && <CountUp className=" orange text-5xl"start={0} end={props.number} duration={1.5} delay={0} />}
              </h1>
          </div>
    </ScrollTrigger>
  )
}

export default CountUpItem