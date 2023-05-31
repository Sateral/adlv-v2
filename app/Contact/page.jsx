import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Hero from '@/components/Hero';

import Cat from '../../public/queens/Fiona/Fiona07.jpg';
import Contact from '@/components/Contact';

const Page = () => {
  return (
    <div className='bg-primary text-secondary font-jost'>
      <Hero pageTitle='Contact' sub='' image={Cat} />

      <div className='flex justify-center items-center'>
        <div className='c-text ss:my-[50px] my-[30px] w-auto sm:text-[25px] ss:text-[20px] text-[18px] px-[20px]'>
          <p className='mb-0'>
            <FontAwesomeIcon icon={faPhone} className='sm:w-5 w-4 inline sm:mb-1 mb-[3px]' /> Call us at:
          </p>
          <ul className='list-disc ml-14'>
            <li>Mobile: (905)-460-7778</li>
            <li>Home: (289)-801-0610</li>
          </ul>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='sm:w-5 w-4 inline sm:mb-1 mb-[3px]' /> Email us at:
            kopylenkoa@gmail.com
          </p>
          <p>
            We are located in Georgetown, Halton Hills ON, CA
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Page;
