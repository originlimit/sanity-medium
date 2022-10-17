import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed flex items-center justify-between w-screen z-99 top-0 bg-gray-50 backdrop-blur-md p-4'>
      <div>
        <Link href='/'>
          <img className='w-44 object-contain cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/798px-Medium_%28website%29_logo.svg.png' alt='MEDIUM' />
        </Link>
      </div>
      <div className='flex'>
        <div className='hidden md:inline-flex items-center space-x-5 font-bold'>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Sign In</h3>
        </div>
        <h3 className='bg-black hover:bg-gray-500 text-white mx-5 py-2 px-4 rounded-full cursor-pointer'>Get Started</h3>
      </div> 
    </header>
  )
}

export default Header
