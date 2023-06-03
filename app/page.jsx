import Link from 'next/link';


import Yossi from '../public/Kings/Yossi/Yossi15.jpg';
import Irina from '@/public/assets/Irina.jpg';

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
                <h2 className='md:text-[22px] sm:text-[18px] text-[22px]'>Welcome to</h2>
                <h1 className='font-dancing md:text-[80px] sm:text-[65px] xs:text-[60px] text-[40px]'>Aurore de la Vie</h1>
                <h3 className='text-right md:text-[22px] sm:text-[18px] text-[22px]'>Cattery</h3>
              </div>
            </div>
          </div>

          <div className='sm:h-[100vh] h-[25vh] sm:w-[80%] w-[100%]'>
            <div 
            className='h-full w-full bg-cover bg-no-repeat opacity-60' 
            style={{backgroundImage: `url(${Yossi.src})`, backgroundPosition: '38% center'}}></div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex h-full w-full bg-primary text-secondary justify-center items-center md:flex-row flex-col gap-[4vw] md:py-[150px] py-[50px]'>
          <div className='md:w-[50%] w-[80%]'>
            <p className='mb-[20px] md:text-[25px] text-[20px]'>Welcome to Aurore de la Vie cattery!</p>
            <p className='mb-[20px] md:text-[25px] text-[20px]'>We're Irina and Andrey, and along with our children, we breed and raise British Shorthairs, in Georgetown, Ontario, Canada.</p>
            <p className='mb-[20px] md:text-[25px] text-[20px]'>We've been registered breeders of British Shorthairs with CCA since 2010 and we are members of one of the oldest cat club in Canada - Hamilton Cat Fanciers.</p>
            <p className='mb-[20px] md:text-[25px] text-[20px]'>To read more about us, <Link href="/AboutUs" className='underline text-blue-500'>click here</Link></p>
          </div>

          <div>
            <img src={Irina.src} alt='Irina of Aurore de la Vie' className='w-full rounded-2xl' style={{boxShadow: '0 0 0 3px #232323, 25px 25px 0px -10px #E8E3DD, -20px -20px 0px -10px #E8E3DD, -20px -20px 0px #232323, 25px 25px 0px -1px #232323'}}/>
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