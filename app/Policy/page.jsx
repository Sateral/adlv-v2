import React from 'react'
import Hero from '@/components/Hero'

import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full h-full bg-primary text-secondary'>
      <Hero pageTitle="Kitten Policy" sub="" image={null} />

      <div className='flex justify-center items-center px-8'>
        <div className='policyText'>
          <ol className='list-decimal'>
            <li>
              Kittens can only be reserved after deposit is received by breeder. (Please click to see <Link href='/Reserve'>How to reserve</Link> page)
            </li>
            <li>
              The outstanding balance will be paid prior or at the latest on the date of delivery of the kitten to the purchaser.
            </li>
            <li>
              Your kitten will...
              <ul className='indent list-disc'>
                <li>
                  Leave our cattery at the minimum age of 13 weeks, completely weaned, toilet trained and socialized with humans and other cats.
                </li>
                <li>
                  Vaccinated twice, dewormed and health-checked by our veterinarian before they leave for a new home.
                </li>
                <li>
                  Go to new home with samples of the food they have been raised, the kitten's favorite toys, and recommended diet list.
                </li>
                <li>
                  Go to their homes with registration paper from CCA (Canada Cat Association).
                </li>
              </ul>
            </li>
            <li>
              All our kittens will be early sterilized prior to placement.
            </li>
            <li>
              The kitten is to remain indoor at all times.
            </li>
            <li>
              Under no circumstances will this kitten be declawed.
            </li>
            <li>
              Under no circumstances will this kitten be sold, leased or given away to any pet shop, animal shelter, laboratory or research facility.
            </li>
            <li>
              The buyer further warrant that this kitten will be given all necessary veterinary care to maintain its health.
            </li>
            <li>
              It is fully understood and acknowledged between both parties that no long-range guarantee can be offered to the varying condition in the kitten's new home environment.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default page