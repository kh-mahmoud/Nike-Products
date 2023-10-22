import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"




const SpecialsOffer = () => {
  return (
    <section className="flex items-center gap-10 max-xl:flex-col-reverse">
        
        <div className="xl:w-1/2 ">
           <img src={offer} className="w-full" alt="offer" />
        </div>
        <div className='flex flex-col flex-1'>
            <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
              <span className='text-origin'> Special </span>
              <span>Offer </span>
            </h2>
            <p className='mt-4 info-text'>
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings, we
              offer unparalleled value that sets us apart.
            </p>
            <p className='mt-6 info-text'>
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with us is
              nothing short of exceptional.
            </p>
            <div className='mt-11 flex gap-4 '>
              <Button iconUrl={arrowRight} label='Shop now' />
              <Button label='Learn more' background='bg-white' border='border-slate-gray' text='text-slate-gray' />

            </div>
         </div>

    </section>
  )
}

export default SpecialsOffer
