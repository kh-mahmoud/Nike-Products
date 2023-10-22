import React from 'react'

const ShoeCard = ({imgUrl, changeBigShoeImg,bigShoeImage}) => {
    const handleclick=()=>
    {
        changeBigShoeImg(imgUrl.bigShoe)
    }

  return (
    <div className=
    {`border-2 rounded-xl
     ${bigShoeImage==imgUrl.bigShoe? 'border-origin scale-105 ':'border-transparent'}
     cursor-pointer flex h-full max-sm:mt5  max-sm:h-36 max-sm:w-36 justify-center
      items-center bg-card bg-center bg-cover rounded-xl p-3 hover:scale-105 transition duration-300 ease-in-out`
    }
     onClick={handleclick}>

        <img height={103} width={127} src={imgUrl.thumbnail} alt="shoe-collection" />
    </div>
  )
}

export default ShoeCard
