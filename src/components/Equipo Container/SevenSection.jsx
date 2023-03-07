import React from 'react'
import bg from '../../assets/nosotros_section/man-img.png'

const SevenSection = () => {
  return (
      <div className="lg:hero xl:hero md:hero min-h-screen   bg-white" style={{backgroundColor:`#f6f7fb`}}>
          <div className="hero-content flex-col lg:flex-row">
              <img src={bg} className="max-w-sm rounded-lg shadow-2xl" />
              <div className='mx-6 '>
                  <h1 className="text-5xl max-sm:text-3xl max-sm:w-60 font-bold text-left mb-10" style={{color:`#111827`}}>Compromiso social y ambiental en cada paso</h1>
                  <p className="py-6 text-justify  "style={{color:`#6D7280`}}>LEAF SOCIAL es una marca de triple impacto que se enfoca en el reciclado de silobolsas, bolsas plastilleras y banners publicitarios, entre oros materiales, creando ecoproductos dentro de la industria de la moda. Transformamos los descartes industriales en ecobolsas, ecomochilas, ecocarteras y muchos más productos que resuelven necesidades de packaging y merchandasing de grandes empresas, a la vez que comunican valores vinculados al cuidado del medio ambiente. Hacemos productos que hacen la diferencia e invitan a toda la sociedad a ser protagonista del cambio. Involucrando al consumidor y a las empresas, comprometiéndolos con la responsabilidad de aportar al cambio social, ser solidario con la compra de un producto cotidiano y concientizándolos sobre el cuidado ambiental. Hacemos negocios que cambian el mundo.</p>
              </div>
          </div>
      </div>
  )
}

export default SevenSection