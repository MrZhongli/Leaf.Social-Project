import React from 'react'

const ItemDetail = ({item}) => {
  return (
    
    <div className="hero min-h-screen bg-white ">
      <div className=" flex-col lg:flex-row m-10 ">
        <div className="lg:mx-20 xl:mx-20">
        <img src={item.img} alt="blog-imagen" className="rounded mb-20 h-96 w-96"/>
          <h1 className="text-5xl font-bold text-stone-900 my-10 text-left">{item.title}</h1>

          <p className="py-6 text-stone-900 text-left montserrat">{item.content}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.secondContent}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.thirdContent}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.forthContent}</p>

          {/* <span className="py-6 text-stone-900">cantidad disponible: {item.stock} </span> */}
          {/* <h2 className='m-20 text-stone-900'>Precio {item.price} </h2> */}

          <div className="mt-10">
            {/* <Link to={`/Contacto`} className='btn bg-cyan-400 btn-success btn-hero '> Solicitar Turno</Link> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ItemDetail