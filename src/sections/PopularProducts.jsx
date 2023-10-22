import { products } from '../constants'
import PopularProducCard from '../components/PopularProducCard'

const PopularProducts = () => {
  return (
    <section id='products'>
      <div className='flex flex-col justify-start  gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-origin'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='flex mt-5 max-md:justify-center justify-between gap-10 flex-wrap items-start'>
          {products.map((pro)=>(
            <PopularProducCard key={pro.name} {...pro}/>
          ))}
      </div>
    </section>
  )
}

export default PopularProducts
