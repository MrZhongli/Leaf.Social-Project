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
    <div className='' style={{backgroundColor:`#F9FAFB`}}>
      <Link to="/Productos">
      <div className='btn-ghost absolute mt-32 max-sm:mx-10 mx-20  w-14 h-14 border-2  flex justify-center rounded-full z-10' >
      <Arrow_leaf className=" mt-4 " />
      </div>
      </Link>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row m-10 ">
          <img src={props.img[Index]} className="rounded-lg mb-20  slide-fwd-rightItem  mt-20" />
          <div className="lg:mx-20 xl:mx-20 slide-fwd-leftItem ">
            <h1 className="text-5xl font-bold my-10 color_primary"  style={{color:`#1D2433`}}>{props.title}</h1>
            {/* <p className="py-6 text-orange text-left orange text-6xl font-bold">$ 3420</p> */}
            <div className="flex-col justify-self-start justify-items-start" >
              <div className="tabs ">
                <p className={ToggleState === 1 ? "tab tab-lifted tab-active" : "tab tab-lifted"}
                  onClick={() => toggleTab(1)}
                >Descripción</p>
                <p className={ToggleState === 2 ? "tab tab-lifted tab-active" : "tab tab-lifted"}
                  onClick={() => toggleTab(2)}
                >Detalles</p>
              </div>

            <div className='h-100'>
            <p className={ToggleState === 1 ? "py-6 text-left color_secondary " : "hidden"} style={{color:`#6D7280`}}>{props.principal_description}</p>
            <p className={ToggleState === 2 ? "mt-6 text-left color_secondary " : "hidden"} style={{color:`#6D7280`}}>{props.detallesUno}</p>
            <p className={ToggleState === 2 ? "text-left color_secondary" : "hidden"} style={{color:`#6D7280`}}>{props.detallesDos}</p>
            <p className={ToggleState === 2 ? "text-left color_secondary" : "hidden"} style={{color:`#6D7280`}}>{props.detallesTres}</p>
            </div>
            <div className="thumb " ref={value}>
              {props.img.map((img, index)=>
                <img src={img}  alt="productos" key={index} 
                  onClick={()=> handleTap(index)}
                   />
              )}
            </div>
            </div>
            <div className="mt-10">
            <a href='https://www.leafsocial.shop/' target="_blank" className="btn bg-orange hover:bg-red-500 text-white">conseguilas</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default P_ItemDetail