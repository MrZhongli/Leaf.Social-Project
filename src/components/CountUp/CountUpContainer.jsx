import React from 'react'
import CountUpItem from './CountUpItem'
import recicleImg from '../../assets/Recycle_img.png'
import recycle_count from '../../assets/Recycle_count.png'

const CountUpContainer = () => {
    return (
        <div className='flex flex-col justify-center align-items-center py-36 bg-white'>
            <div className='flex flex-col pb-20'>
                <img src={recicleImg} alt="reciclaje" className='w-10 h-10 m-auto mb-10' />
                <h2 className='text-5xl font-bold'>YA RECICLAMOS</h2>
            </div>
            <div className='flex justify-center items-center flex-wrap  gap-16'>
                <div className='flex flex-col '>
                    <figure className="px-10 mb-8 flex justify-center m">
                        <img src={recycle_count} alt="recycle" />
                    </figure>
                    <CountUpItem number={8742} />
                    <p>Kg de caucho de neumáticos</p>
                </div>
                <div className='flex flex-col m-5 '>
                    <figure className="px-10 mb-8 flex justify-center m">
                        <img src={recycle_count} alt="recycle" />
                    </figure>
                    <CountUpItem number={3975} />
                    <p>Kg de silobolsa</p>
                </div>
                <div className='flex flex-col m-5 '>
                    <figure className="px-10 mb-8 flex justify-center m">
                        <img src={recycle_count} alt="recycle" />
                    </figure>
                    <CountUpItem number={3186} />
                    <p>Kg de banners publicitarios</p>
                </div>
                <div className='flex flex-col m-5 '>
                    <figure className="px-10 mb-8 flex justify-center m">
                        <img src={recycle_count} alt="recycle" />
                    </figure>
                    <CountUpItem number={1849} />
                    <p>Kg de otros variados textiles</p>
                </div>
            </div>
        </div>
    )
}

export default CountUpContainer