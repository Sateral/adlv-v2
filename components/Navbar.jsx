"use client";

import React, { useState } from 'react'

import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '@/constants';

import close from '../public/assets/close.svg'
import menu from '../public/assets/menu.svg'

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className='bg-secondary fixed w-[100%] z-10 border-b-[3px] border-b-primary'>
        <nav className='flex md:flex-row flex-col justify-center items-center px-4 text-center md:py-4 py-1'>
          <div className='flex flex-row md:hidden justify-between items-center w-[100%]'>
              <div className="logo">
                <Link href="/" ><span className='font-dancing text-[35px] text-whitesmoke'>Aurore de la Vie</span></Link>
              </div>

            <div className='md:hidden flex'>
              <Image src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)} />
            </div>
          </div>

          <ul className={`flex md:flex-row flex-col md:justify-center w-[100%] text-left  ${toggle ? 'active' : null}`}>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`inline-block relative ${index === navLinks.length - 1 ? 'mr-0' : 'mr-16'}`}>
                <Link href={`/${nav.id}`} className='text-whitesmoke text-[18px] font-jost hover:text-gray-400 navHover' onClick={() => setToggle(false)}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar