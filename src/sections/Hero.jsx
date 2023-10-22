import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { motion } from "framer-motion";


const Hero = () => {

  const [bigShoeImage,setBigShoeImg]=useState(bigShoe1)
  
  return (
    <section 
    id='home'
    className='w-full flex xl:flex-row flex-col min-h-screen max-container'>

      <div className='xl:w-2/4 relative pt-28 z-10 w-full padding-x mb-5'>
      <p className='text-xl relative font-montserrat text-origin'>
          Our Summer collections
        </p>

        <h1 className='mt-5 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-origin inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray mb-4 text-lg leading-6 mt-4 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        
        <Button label={"Shop now"} iconUrl={arrowRight}/>

        <div className='flex  justify-start flex-wrap  items-start gap-16 mt-5'>
             {statistics.map((stat,index)=>(
                 <div key={index}>
                     <p className='text-4xl max-md:text-3xl font-palanquin font-bold'>{stat.value}</p>
                     <p className='text-slate-gray leading-7'>{stat.label}</p>

                 </div>
             ))}
        </div>
      </div>
      
      <div className='w-full flex flex-col gap-y-4 bg-hero bg-center bg-cover relative max-xl:py-20 xl:min-h-screen justify-center items-center flex-grow'>
        <motion.div 
         animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat:Infinity,
          duration: 2,
          ease: "easeInOut",}}>

           <img src={bigShoeImage} alt="shoe" className='xl:mt-20  relative object-contain' width={480} height={480} />

      </motion.div>
         <div className='flex gap-4 flex-wrap justify-center items-center '>
            {shoes.map((shoe,index)=>(
                <div key={index}>
                     <ShoeCard imgUrl={shoe} changeBigShoeImg={(shoe)=>setBigShoeImg(shoe)} bigShoeImage={bigShoeImage}/>
                </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default Hero
