import React from 'react'
import Image from 'next/image'
import blogImg from '../assets/undraw_fashion_blogging_re_fhi5.svg'

const Hero = () => {
  return (
    <div className='flex justify-center align-middle bg-red-500 h-96'>
      <section>
        <h1>Discover greatness.</h1>
        <p>Read the thoughts and stories of experts and talented writers in various topics.</p>
      </section>
      <Image src={blogImg} alt='blogging' />
    </div>
  )
}

export default Hero
