import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartItems} = useSelector(state => state.cart)
  const location = useLocation();
  return (
    <nav className='bg-red-400 flex justify-between items-center px-5 py-2'>
        <h2 className='text-2xl font-bold uppercase'>React Cart</h2>
        <div className='flex items-center'>
            <Link className={`mx-4 text-lg transition-opacity hover:opacity-50 ${location.pathname === '/'?'text-white':'text-gray-600'}`} to={'/'}>Home</Link>
            <Link className={`flex mx-4 text-lg ${location.pathname === '/cart'?'text-white':'text-gray-600'}`} to={'/cart'}>
                <FiShoppingBag className='text-xl transition-opacity hover:opacity-50' />
                <p className='absolute bg-white text-black rounded-full w-[17px] h-[17px] font-bold grid place-content-center translate-x-[70%] translate-y-[70%] text-base'>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header