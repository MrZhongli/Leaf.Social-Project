import React from 'react'
import CountUpItem from './CountUpItem'
import recicleImg from '../../assets/Others/isotipo_negro.svg'
import recycle_count from '../../assets/landing/counterIcon/Silobolsa_Icon.svg'
import Neumatic_Icon from '../../assets/landing/counterIcon/Neumatic_Icon.svg'
import plastillera_Icon from '../../assets/Others/Plastillera_coral_icon.svg'
import otros_Icon from '../../assets/landing/counterIcon/otros_Icon.svg'

const CountUpContainer = () => {
    return (
        <div className='flex flex-col justify-center align-items-center py-36 bg-white' style={{backgroundColor:`#F9FAFB`}}>
            <div className='flex flex-col pb-20'>
                <img src={recicleImg} alt="reciclaje" className='w-20 h-20 m-auto mb-10' />
                <h2 className='text-5xl max-sm:text-3xl font-bold text-black' style={{color:`#1D2433`}}>Ya reciclamos</h2>
            </div>
            <div className='flex justify-center items-center flex-wrap  gap-16'>
                <div className='flex flex-col '>
                    <figure className="px-10 mb-8 flex justify-center m">
                        <img src={recycle_count} alt="recycle" />
                    </figure>
                    <CountUpItem number={76492} />
                    <p style={{color:`#4A505C`}} className="mt-10">Kg de silobolsa</p>
                </div>
                <div className='flex flex-col '>
                    <figure className="px-2 mb-8 flex justify-center m">
                        <img src={Neumatic_Icon} alt="recycle" />
                    </figure>
                    <CountUpItem number={8742} />
                    <p style={{color:`#4A505C`}} className="mt-10">Kg de caucho de neumáticos</p>
                </div>
                <div className='flex flex-col '>
                    <figure className="px-2 mb-8 flex justify-center ">
                        <img src={plastillera_Icon} className='h-24' alt="recycle" />
                    </figure>
                    <CountUpItem number={3186} />
                    <p style={{color:`#4A505C`}} className="mt-10 ">Kg de bolsas plastilleras</p>
                </div>
                <div className='flex flex-col  '>
                    <figure className="px-2 mb-8 flex justify-center m">
                        <img src={otros_Icon} alt="recycle" />
                    </figure>
                    <CountUpItem number={1849} />
                    <p style={{color:`#4A505C`}} className="mt-10">Kg de otros tipos de descartes</p>
                </div>
            </div>
        </div>
    )
}

export default CountUpContainer