import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow_leaf from '../../../assets/Others/Arrow_leaf'
import '../../styles/styles.css'

const P_ItemDetail = ({props}) => {

    useEffect(() => {
      console.log(props.title)
    })
    
  return (
    <div className='' style={{backgroundColor:`#F9FAFB`}}>
      <Link to="/Productos">
      <div className='btn-ghost absolute mt-32 max-sm:mx-10 mx-20  w-14 h-14 border-2  flex justify-center rounded-full z-10' >
      <Arrow_leaf className=" mt-4 " />
      </div>
      </Link>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row m-10 ">
          <img src={props.img} className="rounded-lg mb-20  slide-fwd-rightItem  mt-20" />
          <div className="lg:mx-20 xl:mx-20 slide-fwd-leftItem ">
            <h1 className="text-5xl font-bold text-stone-900 my-10 color_primary">{props.title}</h1>
            <p className="py-6 text-orange text-left orange text-6xl font-bold">$ 3420</p>
            <p className="py-6 text-stone-900 text-left color_secondary ">{props.principal_description}</p>
            <div className="flex-col justify-self-start justify-items-start" >
              <div className="tabs ">
                <a className="tab tab-lifted">Tab 1</a>
                <a className="tab tab-lifted tab-active">Tab 2</a>
                <a className="tab tab-lifted">Tab 3</a>
              </div>
            </div>
            <div className="mt-10">
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default P_ItemDetail