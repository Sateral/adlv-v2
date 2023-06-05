import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

import Cat from '../../public/queens/Ursula/Ursula01.jpg'

const page = () => {
  return (
    <div className='bg-primary'>
      <Hero pageTitle="Important Info" sub="" image={Cat} />

      {/* <ul className='flex sm:flex-row flex-col items-center sm:justify-center justify-around list-none p-0 m-0 sm:gap-[30px] gap-0'>
        <li><Link href="/Reserve" className='flex justify-center items-center text-primary bg-secondary rounded-lg p-[10px] my-[80px] text-center w-[260px] h-[200px] text-[25px] transition ease-in-out hover:scale-[1.05]'>How href Reserve</Link></li>
        <li><Link href="/Policy" className='flex justify-center items-center text-primary bg-secondary rounded-lg p-[10px] my-[80px] text-center w-[260px] h-[200px] text-[25px] transition ease-in-out hover:scale-[1.05]'>Kitten Policy</Link></li>
        <li><Link href="/Expensive" className='flex justify-center items-center text-primary bg-secondary rounded-lg p-[10px] my-[80px] text-center w-[260px] h-[200px] text-[25px] transition ease-in-out hover:scale-[1.05]'>Why are Kittens so Expensive?</Link></li>
      </ul> */}
      <ul className='options'>
        <li><Link href="/reserve">How to Reserve</Link></li>
        <li><Link href="/policy">Kitten Policy</Link></li>
        <li><Link href="/expensive">Why are Kittens so Expensive?</Link></li>
      </ul>
    </div>
  )
}

export default page