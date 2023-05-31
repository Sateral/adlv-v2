"use client";

import React, { useState, useEffect } from 'react';
import Litters from '../../public/kittens/Litters.js';
import Image from 'next/image.js';
import Hero from '@/components/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import Cat from '../../public/Kings/Yossi/Yossi06.jpg';

const page = () => {
  const [litterIndex, setLitterIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const [currentKittenIndex, setCurrentKittenIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLitterChange = (event) => {
    setLitterIndex(event.target.selectedIndex);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleOpenModal = (litterIndex, kittenIndex, imageIndex) => {
    setCurrentObjectIndex(litterIndex);
    setCurrentKittenIndex(kittenIndex);
    setCurrentImageIndex(imageIndex);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handlePrev = () => {
    if (isLoading) {
      return;
    }

    setCurrentImageIndex((prevImageIndex) => {
      if (prevImageIndex === 0) {
        return Litters[currentObjectIndex][1].kittens[currentKittenIndex].images.length - 1;
      } else {
        return prevImageIndex - 1;
      }
    });
  };

  const handleNext = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    setCurrentImageIndex((prevImageIndex) => {
      if (prevImageIndex === Litters[currentObjectIndex][1].kittens[currentKittenIndex].images.length - 1) {
        return 0;
      } else {
        return prevImageIndex + 1;
      }
    });
  };

  const handleCloseModal = () => {
    setCurrentObjectIndex(null);
    setCurrentImageIndex(null);
    setModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div>
      <Hero pageTitle="Kittens" sub="of Aurore de la Vie" image={Cat} />
      <div className='h-full w-full bg-primary border-bottom-[4px] text-secondary'>
        <div>
          <h1 className='text-[24px] font-jost pt-4 px-4'>Viewing Kittens</h1>
          <p className='inline text-[20px] px-4'>British Shorthair Litter</p>
          <select className='inline ml-[10px] w-[60px] h-[30px] border-none rounded-[5px] bg-secondary text-[20px] text-primary' onChange={handleLitterChange}>
            {Litters.map((litter) => (
              <option key={litter[0].letter}>{litter[0].letter}</option>
            ))}
          </select>
          
          <div className='flex flex-col justify-center items-center my-[20px] p-[20px] bg-[#1b1b1b] text-primary'>
            <div className="flex flex-row justify-center items-center gap-[5vw]">
              <div className="text-center">
                <h1 className='text-[24px]'>{Litters[litterIndex][1].parents?.[0]?.parent}</h1>
                <div className='max-w-[600px] mb-4'>
                  <Image src={Litters[litterIndex][1].parents?.[0]?.image} alt="Mother Cat" className='w-full rounded-t-lg mb-[-6px]' />
                  <p className='bg-primary text-secondary text-base text-center p-[2px] rounded-b-lg w-full'>Aurore de la Vie <br/> {Litters[litterIndex][1].parents[0].name}</p>
                </div>
              </div>
              <div className="text-center">
                <h1 className='text-[24px]'>{Litters[litterIndex][1].parents?.[1]?.parent}</h1>
                <div className='max-w-[600px] mb-4'>
                  <Image src={Litters[litterIndex][1].parents?.[1]?.image} alt="Father Cat" className='w-full rounded-t-lg mb-[-6px]' />
                  <p className='bg-primary text-secondary text-base text-center p-[2px] rounded-b-lg w-full'>Aurore de la Vie <br/> {Litters[litterIndex][1].parents[1].name}</p>
                </div>
              </div>
            </div>
            <div className='sm:text-[30px] text-[20px]'>
              Kittens born on {Litters[litterIndex][1].parents?.[2]?.birthdate}
            </div>
          </div>

          <div className='kittenGrid p-8'>
            {Litters[litterIndex][1].kittens?.map((kitten, index) => (
              <div key={index}>
                <div className='relative kittenCell cursor-pointer' onClick={() => handleOpenModal(litterIndex, index, 0)}>
                  <Image src={kitten.images[0]} alt={kitten.name} className='w-full block rounded-t-lg' />
                  <div className='absolute bg-black bottom-0 left-0 w-full h-0 flex justify-center items-center flex-col overflow-hidden rounded-[6px] bg-opacity-50 text-primary imageOverlay' style={{transition: 'height ease-in-out 250ms'}}>
                    <p>Sex: {kitten.sex}</p>
                    <p>Color: {kitten.color}</p>
                    <p>Status: {kitten.status}</p>
                  </div>
                  <p className='bg-[#1b1b1b] rounded-b-lg text-primary text-base text-center p-[2px]'>Aurore de la Vie<br />{kitten.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modalContent">
          {/* isLoading && */}
            {isLoading && <h1 className='absolute left-[50%] translate-x-[-50%] font-jost text-[2rem] bg-secondary p-5 rounded-lg'>Loading...</h1>}
            <Image
              src={Litters[currentObjectIndex][1].kittens[currentKittenIndex].images[currentImageIndex]}
              className={`kittenImage ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              alt="Cat"
              onLoad={() => setIsLoading(false)}
            />
            <div className="imageIndex">
              {currentImageIndex + 1}/{Litters[currentObjectIndex][1].kittens[currentKittenIndex].images.length}
            </div>
            <div className="mobile">
              <FontAwesomeIcon icon={faCircleChevronLeft} className="prevButton" onClick={handlePrev} />
              <FontAwesomeIcon icon={faCircleXmark} className="closeButton" onClick={handleCloseModal} />
              <FontAwesomeIcon icon={faCircleChevronRight} className="nextButton" onClick={handleNext} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;