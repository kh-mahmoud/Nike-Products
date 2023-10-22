import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='flex gap-9 items-center  flex-wrap'>
      {services.map((service)=>(
          <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
