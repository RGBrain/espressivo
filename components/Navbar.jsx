import React from 'react'
import Image from 'next/image'

export default function navbar() {
  return (
    <nav className='bg-orange-500 py-0 m-0 text-xl font-bold text-white'>
      <ul className="flex mx-2 p-6 items-center justify-between">
        <Image
              src="/Espressivo.png"
              width={150}
              height={150}
              alt="Espressivo Logo"
              />
        <li className='p-3'>Whats on</li>
        <li className='p-3'>Previous Events</li>
        <li className='p-3'>About Us</li>
        <li className='p-3'>Contact Us</li>
        </ul>
    </nav>
  )
}


