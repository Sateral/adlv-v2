"use client";

import React, { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import { queensList } from '@/public/queens/QueensList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

import Cat from '../../public/queens/Fiona/Fiona10.webp'

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleOpenModal = (kittenIndex, imageIndex) => {
    setCurrentObjectIndex(kittenIndex);
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
        return queensList[currentObjectIndex].images.length - 1;
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
      if (prevImageIndex === queensList[currentObjectIndex].images.length - 1) {
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
      <Hero pageTitle="Queens" sub="of Aurore de la Vie" image={Cat}/>
      {queensList.map((queen, index) => (
        <div 
        key={index} 
        className="flex md:flex-row flex-col flex-nowrap justify-center items-center gap-[2%] bg-primary p-14 transition ease-in-out delay-250 text-secondary" 
        id={queen.name}
        >
          <div 
          className={`image-gallery ${index % 2 != 0 ? 'md:order-3' : 'md:order-1'}`} 
          onClick={() => handleOpenModal(index, 0)}
          >
            <Image
              loading='lazy'
              src={queen.images[0]}
              alt={queen.name}
              className="rounded-lg border-4 border-solid border-[#363636] hover:opacity-80 cursor-pointer sm:max-w-[650px] w-[550px] md:mb-0 mb-8"
            />
          </div>
          <div className="flex-2/3 text-center md:order-2">
            <div className="text-box inline-block text-left bg-[#eeeae6] p-[30px] rounded-2xl">
              <h2 className='font-dancing md:text-[3.5rem] text-[3rem] font-semibold'>Aurore de la Vie {queen.name}</h2>
              <hr className='h-[5px] w-full border-0 bg-[#c2b8ac]' />
              <div className='pt-[20px] text-[1.1rem]'>
                <p>
                  <span className='font-semibold'>Breed: </span>
                  {queen.breed}
                </p>
                <p>
                  <span className='font-semibold'>Colour: </span>
                  {queen.color}
                </p>
                <p>
                  <span className='font-semibold'>Sir: </span>
                  {queen.sir}
                </p>
                <p>
                  <span className='font-semibold'>Dame: </span>
                  {queen.dame}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && (
        <div className="modal">
          <div className="modalContent">
          {/* isLoading && */}
            {isLoading && <h2 className='absolute left-[50%] translate-x-[-50%] font-jost text-[2rem] bg-secondary p-5 rounded-lg'>Loading...</h2>}
            <Image
              src={queensList[currentObjectIndex].images[currentImageIndex]}
              className={`kittenImage ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              alt="Cat"
              onLoad={() => setIsLoading(false)}
            />
            <div className="imageIndex">
              {currentImageIndex + 1}/{queensList[currentObjectIndex].images.length}
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
  )
}

export default page