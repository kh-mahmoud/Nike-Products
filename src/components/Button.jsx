


const Button = ({label,background,border,text,iconUrl}) => {
  return (
    <button className={`flex justify-center text-lg leading-none items-center gap-2 border
    ${background? `${border} ${background} ${text} hover:bg-[#e5e6eb]`: 'bg-origin text-white border-[#3240a3] hover:bg-[#3f53f1]'}
     rounded-full  px-5 py-3  `}>
        {label}
   {iconUrl && <img src={iconUrl} alt="arrow" className='pl-2 rounded-full w-6 h-6' />}
    </button>
  )
}

export default Button
