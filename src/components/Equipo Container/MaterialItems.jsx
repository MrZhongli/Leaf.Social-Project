import React from 'react'

const MaterialItems = (props) => {
    const { name, imagen} = props.item
    const img = Object.values(imagen)
  return (
      <div className=" ">
          <img src={img} alt={imagen} className=" glass_effect duration-100 rounded-none transition-1 hover:scale-105" />
          <h1 className='font-bold text-lg text-left mt-7 text-black' style={{ color: `#1D2433` }}>
              {name}
          </h1>
      </div>
  )
}

export default MaterialItems