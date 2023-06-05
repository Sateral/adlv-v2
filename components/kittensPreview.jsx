"use client";

import React, { useState } from 'react';
import Litters from '../public/kittens/Litters.js';
import Image from 'next/image.js';
import Link from 'next/link.js';

const KittensPreview = () => {
  const [litterIndex, setLitterIndex] = useState(0);

  const handleLitterChange = (event) => {
    setLitterIndex(event.target.selectedIndex);
    console.log('Selected index:', litterIndex);
  };

  return (
    <div className='flex justify-center items-center h-full w-full bg-secondary border-bottom-[4px] text-primary p-[20px]'>
      <div className='w-[1430px]'>
        <p className='text-[24px] font-jost'>Viewing Kittens Preview</p>
        <p className='inline text-[20px]'>British Shorthair Litter</p>
        <select className='inline ml-[10px] w-[60px] h-[30px] border-none rounded-[5px] bg-gray-600 text-[20px] text-primary' onChange={handleLitterChange}>
          {Litters.map((litter) => (
            <option key={litter[0].letter}>{litter[0].letter}</option>
          ))}
        </select>
        <div className='kittenGrid'>
          {Litters[litterIndex][1].kittens?.map((kitten, index) => (
            <div key={index}>
              <div className='relative kittenCell'>
                <Image src={kitten.images[0]} alt={kitten.name} className='w-full block rounded-t-lg' />
                <div className='absolute bg-black bottom-0 left-0 w-full h-0 flex justify-center items-center flex-col overflow-hidden rounded-[6px] bg-opacity-50 imageOverlay' style={{transition: 'height ease-in-out 250ms'}}>
                  <p>Sex: {kitten.sex}</p>
                  <p>Color: {kitten.color}</p>
                  <p>Status: {kitten.status}</p>
                </div>
                <p className='bg-[#1b1b1b] rounded-b-lg text-primary text-base text-center p-[2px]'>Aurore de la Vie<br />{kitten.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className='text-center '><Link href="/kittens" className='underline text-blue-400 hover:text-blue-600 text-[22px]'>View More</Link></p>
      </div>
    </div>
  );
};

export default KittensPreview;
