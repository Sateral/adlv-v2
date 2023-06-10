import React from 'react'
import Hero from '@/components/Hero'
import Link from 'next/link'

import Cat from '../../public/queens/Ursula/Ursula01.webp'

const page = () => {
  return (
    <div className='bg-primary'>
      <Hero pageTitle="Important Info" sub="" image={Cat} />

      <ul className='options'>
        <li><Link href="/Reserve">How to Reserve</Link></li>
        <li><Link href="/Policy">Kitten Policy</Link></li>
        <li><Link href="/Expensive">Why are Kittens so Expensive?</Link></li>
      </ul>
    </div>
  )
}

export default page