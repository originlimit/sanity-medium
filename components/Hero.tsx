import React from 'react'
import Image from 'next/image'
import blogImg from '../assets/heroimg.svg'

const Hero = () => {
  return (
    <div className='flex justify-center bg-yellow-500'>
      <div className='flex justify-center items-center h-96 max-w-7xl px-10 py-3'>
        <section className='p-2 flex-col items-center w-1/2 justify-center align-middle'>
          <h1 className='py-3 font-serif text-left text-5xl font-semibold'><span className='underline font-serif'>Medium:</span> discover greatness.</h1>
          <p className='py-3 text-2xl text-left'>Read the thoughts and stories of experts and talented writers in various topics.</p>
          <h3 className='bg-black hover:bg-gray-500 text-white my-5 text-xl max-w-xs py-2 px-4 rounded-full cursor-pointer'>Start reading</h3>
        </section>
        <div className='flex justify-center w-1/2'>
          <Image src={blogImg} alt='blogging' />
        </div>
      </div>
    </div>
  )
}

export default Hero

