import React from 'react'
import './styles/styles.css'

const MySection = (props) => {
  return (
    <div className="section h-screen bg-slate-400 flex w-full justify-center items-center">
        <div className='copy'>
            <h2 className='hola text-white text-center relative z-1 text-3xl font-bold max-sm:text-red-900 max-sm:text-5xl'> {props.text} </h2>

        </div>
        <button className='downarrow'></button>
    </div>

  )
}

export default MySection