import React from 'react'
import Image from 'next/image'
import blogImg from '../assets/undraw_fashion_blogging_re_fhi5.svg'

const Hero = () => {
  return (
    <div className='flex justify-center bg-yellow-500'>
      <div className='flex justify-center items-center h-96 max-w-7xl px-10 py-5'>
        <section className='p-0 flex-col items-center justify-center w-1/2'>
          <h1 className='my-3 font-serif text-left text-5xl font-semibold'><span className='underline font-serif'>Medium:</span> discover greatness.</h1>
          <p className='my-3 text-2xl text-left'>Read the thoughts and stories of experts and talented writers in various topics.</p>
        </section>
        <div className='flex justify-center px-5 w-1/2 max-h-80'>
          <Image src={blogImg} alt='blogging' />
        </div>
      </div>
    </div>
  )
}

export default Hero

