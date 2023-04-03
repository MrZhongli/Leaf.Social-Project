import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Arrow_leaf from '../../../assets/Others/Arrow_leaf'
import '../../styles/styles.css'

const P_ItemDetail = ({props}) => {

    const [ToggleState, setToggleState] = useState(1)
    const [Index, setIndex] = useState(0)

    const toggleTab = (index) =>{
      setToggleState(index)
    }
    const value = useRef()

    const handleTap =(index)=>{
      setIndex(index)
      const images = value.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active" ,"");
      }
      images[index].className= "active";
      
    }
    
  return (
    <div style={{backgroundColor:`#F9FAFB`}}>
      <Link to="/Productos">
      <div className='btn-ghost fixed mt-32 max-sm:mx-10 mx-20 w-14 h-14 border-2 flex justify-center rounded-full z-10' >
          <Arrow_leaf className="mt-4 " />
      </div>
      </Link>
      <div className="hero  pb-10">
        <div className=" flex flex-col lg:flex-row px-20 ">
          <div className='flex flex-col md:w-2/5 max-sm:w-full max-sm:mt-20 justify-center md:mx-20 lg:mx-5 xl:mx-5 lg:my-32 md:my-32 xl:my-32'>
              <img src={props.img[Index]} className="rounded-lg w-full mt-20" />
              <div className="thumb my-5 max-sm:mx-0 mx-16 flex-row flex-wrap" ref={value}>
              {props.img.map((img, index) =>
                <img src={img} alt="productos" key={index}
                  onClick={() => handleTap(index)} />
              )}
            </div>
          </div>
          {/* left side */}
          <div className="lg:mx-5 xl:mx-5 w-4/5 max-sm:w-full mt-44 max-sm:mt-5 slide-fwd-leftItem  ">
            <h1 className="text-5xl font-bold my-10 text-start"  style={{color:`#1D2433`}}>{props.title}</h1>
            {/* <p className="py-6 text-orange text-left orange text-6xl font-bold">$ 3420</p> */}
            <div className="flex-col justify-self-start justify-items-start" >
              {/* <div className="tabs ">
                <p style={{color:`#1D2433`}} className={ToggleState === 1 ? "tab tab-lifted text-xl font-bold tab_active" : "tab font-bold text-xl"}
                  onClick={() => toggleTab(1)}
                >Descripción</p>
                <p style={{color:`#1D2433`}} className={ToggleState === 2 ? "tab tab-lifted text-xl font-bold tab_active" : "tab font-bold text-xl"}
                  onClick={() => toggleTab(2)}
                >Detalles</p>
              </div> */}
            <div>
            <p className={ToggleState === 1 ? "py-6 text-left color_secondary " : "hidden"} style={{color:`#6D7280`}}>{props.principal_description}</p>
            <ul className='flex relative right-5 '>
              <div>
              {props.img_popups.map((img)=>
              <img src={img} alt='icon' className='w-16 h-16'></img>
              )}
                
              </div>
              <div className=''>
              {props.text.map((text)=>
              <li className='text-left py-5 mx-2' style={{color:`#1D2433`}}>{text} </li>
              )}
              </div>
              
              </ul>
            {/* <p className={ToggleState === 2 ? "mt-6 text-left color_secondary " : "hidden"} style={{color:`#6D7280`}}>{props.detallesUno}</p>
            <p className={ToggleState === 2 ? "text-left color_secondary" : "hidden"} style={{color:`#6D7280`}}>{props.detallesDos}</p>
            <p className={ToggleState === 2 ? "text-left color_secondary" : "hidden"} style={{color:`#6D7280`}}>{props.detallesTres}</p> */}
            </div>
            </div>
            <div className="mt-10 flex justify-end">
            <a href='https://www.leafsocial.shop/' target="_blank" className="btn bg-orange normal-case border-transparent hover:bg-red-500 text-white ">Conseguilas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default P_ItemDetail