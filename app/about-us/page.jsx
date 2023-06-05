import React from 'react'
import Hero from '@/components/Hero'

import Cat from '../../public/Kings/Yossi/Yossi04.jpg'
import Yossi from '../../public/Kings/Yossi/Yossi13.jpg'

const page = () => {
  return (
    <div className='bg-primary'>
      <Hero pageTitle="About Us" sub="from Aurore de la Vie" image={Cat}/>
      <div className="h-full bg-primary flex justify-center items-center flex-col" id="about-us">
        <div className="px-[40px] py-[80px] max-w-[1280px] text-secondary text-xl">
          <p className='pb-6 indent-8'>
              The Cheshire smile, huge chubby cheeks and the plush look of a British Shorthair coat are so-called trademarks of this breed. This together with their known wonderful disposition towards children and all members of the family makes them best pets you can ever dream about.
          </p>
          <p className='pb-6'>
              We breed the following colours in solid: Traditional Blue, rare Lilac and Chocolate, and exclusive colours of Cinnamon and Fawn, the first and only in Canada! All our cats have high titled representatives of British breed in their pedigrees and carry world famous bloodlines such as: Coppins, Lion King, Pepper King, Scorpions, Catwalk’s and many others... Our aim is to breed healthy, happy, affectionate British Shorthair cats that are of excellent type and superb temperament making them exceptional family pets. We adore the British shorthair cats and have dedicated all our time to prefect and maintain this amazing breed of cats.
          </p>
          <p className='pb-6'>
              We focus firstly on health. All our cats are FIV, PKD and FeLV free and blood tested. Our goals as breeders are to produce British true to standards, aiming for that dense soft coat, strong solid body, large round head, small ears and those beautiful round copper eyes that draw you in, like a moth to a light. As a hobby breeder all our British shorthairs are much loved family pets and all our British kittens are born and raised in our home and are given lots of cuddles and love from birth.
          </p>
          <p className='pb-6'>
              We breed for quality not quantity, so this means we only have a limited number of British Shorthair kittens available every year and have a waiting list of new owners ready to adopt kittens. Be our dear guest and have a look at what's next on our pages, and if you have discovered that you are one of us, fans of furry British teddy bears, always feel free to contact us about purchasing an "Aurore De La Vie" kitten, or if you need more information about those wonderful animals!
          </p>
        </div>

        <div className="w-full h-[30vh] bg-secondary mb-[110px] border-t-8 border-b-8 border-secondary">
          <div className="md:w-[60%] w-[80%] h-full m-auto bg-transparent bg-no-repeat bg-cover opacity-60" style={{backgroundImage: `url(${Yossi.src})`, backgroundPosition: '80% center'}}></div>
        </div>
      </div>
    </div>
  )
}

export default page