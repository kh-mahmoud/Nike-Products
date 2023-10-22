import React from 'react'
import { star } from '../assets/icons'

const PopularProducCard = ({imgURL,price,name}) => {
  return (
    <div className=' hover:scale-105 transition duration-300 ease-in-out mt-2'>
        <img className='cursor-pointer' src={imgURL} alt={name} width={280} height={280} />

        <div className='mt-8 flex gap-2.5 justify-start'>
           <img src={star} alt="rating" height={25} width={25} />
           <p className='text-xl font-montserrat text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='text-2xl mt-2'>{name}</h3>
        <p className='text-2xl text-origin'>{price}</p>
    </div>
  )
}

export default PopularProducCard
