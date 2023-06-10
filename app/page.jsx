import Link from 'next/link';


import Yossi from '../public/Kings/Yossi/Yossi15.webp';
import Irina from '@/public/about/Irina.webp';

import Preview from '@/components/kittensPreview';
import Contact from '@/components/Contact.jsx';
import ScrollArrow from '@/components/ScrollArrow';

export default function Home() {
  return (
    <main>
      <section className='w-full flex-center flex-col'>
        <div className='flex justify-center items-center sm:flex-row flex-col bg-secondary'>
          <div className='h-[75vh] w-full m-0 p-0 flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center flex-col'>
              <div className='text-whitesmoke font-jost'>
                {/* <h1>
                  <span className='md:text-[22px] sm:text-[18px] text-[22px]'>Welcome to</span>
                  <br></br>
                  <span className='font-dancing md:text-[80px] sm:text-[65px] xs:text-[60px] text-[40px]'>Aurore de la Vie</span>
                </h1>
                <h3 className='text-right md:text-[22px] sm:text-[18px] text-[22px]'>Cattery</h3> */}
                <h2 className='md:text-[22px] sm:text-[18px] text-[22px]'>Welcome to</h2>
                <h1 className='font-dancing md:text-[80px] sm:text-[65px] xs:text-[60px] text-[40px]'>Aurore de la Vie</h1>
                <h3 className='text-right md:text-[22px] sm:text-[18px] text-[22px]'>Cattery</h3>
              </div>
            </div>
          </div>

          <div className='sm:h-[100vh] h-[25vh] sm:w-[80%] w-[100%]'>
            <div 
            className='h-full w-full bg-cover bg-no-repeat opacity-90' 
            style={{backgroundImage: `url(${Yossi.src})`, backgroundPosition: '38% center'}}></div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex h-full w-full bg-primary text-secondary justify-center items-center md:flex-row flex-col gap-[4vw] md:py-[150px] py-[50px]'>
          <div className='md:w-[50%] w-[80%]'>
            <p className='mb-[20px] md:text-[25px] text-[20px]'>Welcome to the Aurore de la Vie cattery!</p>
            <p className='mb-[20px] md:text-[20px] text-[20px]'>We're Irina and Andrey, and along with our children, we breed and raise British Shorthairs, located in Georgetown, Ontario, Canada.</p>
            <p className='mb-[20px] md:text-[20px] text-[20px]'>Our commitment to breeding these magnificent feline companions has led us on an incredible journey. With our extensive experience and expertise, we ensure the health, well-being, and impeccable lineage of our cats. We take great pride in upholding the highest standards of breeding practices for our British Shorthairs.</p>
            <p className='mb-[20px] md:text-[20px] text-[20px]'>We've been registered breeders of British Shorthairs with CCA since 2010 and we are members of one of the oldest cat club in Canada - Hamilton Cat Fanciers. Our involvement with the cat fanciers community allows us to stay connected with fellow enthusiasts, exchange knowledge, and continuously improve our breeding practices.</p>
            <p className='mb-[20px] md:text-[20px] text-[20px]'>To learn more about our journey and the exceptional qualities that set us apart, we invite you to explore further. <Link href="/about-us" className='underline text-blue-500'>Click here</Link> to discover how our dedication and love for these remarkable creatures have shaped Aurore de la Vie cattery</p>
          </div>

          <div>
            <img src={Irina.src} alt='Irina of Aurore de la Vie' className='xs:w-[375px] w-[250px] h-auto rounded-2xl' style={{boxShadow: '0 0 0 3px #232323, 25px 25px 0px -10px #E8E3DD, -20px -20px 0px -10px #E8E3DD, -20px -20px 0px #232323, 25px 25px 0px -1px #232323'}}/>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center'>
        <Preview />
      </section>

      <section>
        <Contact />
      </section>
      
      <ScrollArrow />
    </main>
  );
};