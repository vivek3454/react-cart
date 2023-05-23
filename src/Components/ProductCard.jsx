import React from 'react'

const ProductCard = ({name, id, price, handler, imgSrc}) => {
  return (
    <div className='w-52 m-8 p-8 bg-white rounded-md flex flex-col items-center'>
        <img className='h-full w-full object-contain' src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4 className='m-4 font-medium'>${price}</h4>
        <button className='bg-red-400 text-white px-2 py-2 rounded-md transition duration-500 font-semibold w-full hover:bg-red-500' onClick={() => handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>
    </div>
  )
}

export default ProductCard