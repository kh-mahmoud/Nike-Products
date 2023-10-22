


const ServiceCard = ({label,imgURL,subtext}) => {
  return (
    <div className='flex-1 cursor-pointer hover:scale-105 transition duration-300 ease-in-out flex-wrap min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-origin rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
          {subtext}
        </p>
  </div>
  )
}

export default ServiceCard
