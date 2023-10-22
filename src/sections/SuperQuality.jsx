import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between max-xl:flex-col items-center w-full gap-10'>
         <div className='flex flex-col'>
            <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
              We Provide You
              <span className='text-origin'> Super </span>
              <span className='text-origin'>Quality </span> Shoes
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>
              Ensuring premium comfort and style, our meticulously crafted footwear
              is designed to elevate your experience, providing you with unmatched
              quality, innovation, and a touch of elegance.
            </p>
            <p className='mt-6 lg:max-w-lg info-text'>
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className='mt-11'>
              <Button label='View details' />
            </div>
         </div>
         <div>
            <img width={570} height={522} src={shoe8} alt="shoe" />
         </div>
    </section>
  )
}

export default SuperQuality
