"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(true);

  const checkScrollTop = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScroll(scrollTop === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className={`text-white flex flex-col fixed bottom-5 left-[50%] translate-x-[-50%] items-center justify-center cursor-default text-[25px] ml-[-46px] scroll-arrow ${showScroll ? '' : 'hide'}`}>
      <span>View more</span>
      <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
    </div>
  );
}

export default ScrollArrow;
