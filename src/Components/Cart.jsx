import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const {cartItems, subTotal, shipping, tax, total} = useSelector(state=> state.cart);

  const dispatch = useDispatch()
  const increment = (id)=>{
    dispatch({
      type:'addToCart',
      payload: {id}
    });
    dispatch({type:'calculatePrice'});
  }
  const decrement = (id)=>{
    dispatch({
      type:'decrement',
      payload: id
    });

    dispatch({type:'calculatePrice'});
  }
  const deleteHandler = (id)=>{
    dispatch({
      type:'deleteFromCart',
      payload: id
    });
    dispatch({type:'calculatePrice'});
  }

  return (
    <div className='h-screen grid grid-cols-[4fr_1fr] max-[820px]:grid-cols-[1fr]'>
      <main className='p-8 overflow-y-auto'>
       {
        cartItems.length > 0 ? (
          cartItems.map(i=>(
            <CartItem
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            qty={i.quantity}
            id={i.id}
            key={i.id}
            decrement={decrement}
            increment={increment}
            deleteHandler={deleteHandler}
          />
          ))
        ) : <h1 className='text-white font-thin text-3xl font-mono'>No Items Yet</h1>
       }
      </main>
      <aside className='rounded-[50px_0px_0px_50px] max-[820px]:rounded-none max-[820px]:p-8  text-white pl-6 h-full w-full shadow-2xl shadow-[rgba(255,255,255,0.3)] flex flex-col justify-center'>
        <h2 className='m-4 font-thin text-xl font-mono text-gray-600 tracking-wide max-[820px]:text-lg'>Subtotal: ${subTotal}</h2>
        <h2 className='m-4 font-thin text-xl font-mono text-gray-600 tracking-wide max-[820px]:text-lg'>Shipping: ${shipping}</h2>
        <h2 className='m-4 font-thin text-xl font-mono text-gray-600 tracking-wide max-[820px]:text-lg'>Tax: ${tax}</h2>
        <h2 className='m-4 font-semibold text-2xl font-mono tracking-wide max-[820px]:text-xl'>Total: ${total}</h2>
      </aside>
    </div>
  )
}


const CartItem = ({imgSrc, name, price, qty, decrement, increment, deleteHandler, id})=>(
  <div className='bg-white w-full rounded-[10px] my-8 px-4 grid grid-cols-[1fr_3fr_1fr_1fr] max-[820px]:grid-cols-[2fr_2fr_1fr_1fr] items-center'>
    <img className='w-full h-[200px] object-contain' src={imgSrc} alt="Item"/>
    <article>
      <h3 className='font-semibold max-[380px]:text-xs'>{name}</h3>
      <p>${price}</p>
    </article>
    <div className='flex items-center h-full'>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={()=>decrement(id)}>-</button>
      <p className='w-8 h-8 grid place-content-center font-medium'>{qty}</p>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={()=>increment(id)}>+</button>
    </div>
    <AiFillDelete className='cursor-pointer text-2xl inline-block m-auto hover:text-red-500' onClick={()=>deleteHandler(id)} />
  </div>
)

export default Cart