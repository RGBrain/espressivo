import React from 'react'
import Image from 'next/image'
import NavItem from './NavItem'

export default function navbar() {
  return (
    <nav className='esporange py-0 my-0 text-xl font-bold text-white mx-auto'>
      <div className="flex">
      <Image
              src="/Espressivo.png"
              width={100}
              height={100}
              alt="Espressivo Logo"
              />
      <ul className="relative flex mx-2 p-6 items-center justify-between bg-esporange">
          <NavItem linkName="Whats On" />
          <NavItem linkName="Previous Events" />
          <NavItem linkName="About Us" />
          <NavItem linkName="Contact Us" />
        </ul>
      </div>
    </nav> 
  )
}


