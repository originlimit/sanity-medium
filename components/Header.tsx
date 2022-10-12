import React from 'react'

const Header = () => {
  return (
    <header className='fixed flex justify-center w-screen z-99 top-0 bg-blue-100 backdrop-blur-md p-4'>
      <div className='flex w-full justify-between text-lg'>
        <span className='font-bold'>MEDIUM</span>
        <span>Home Services Pricing About</span>
      </div>
    </header>
  )
}

export default Header
