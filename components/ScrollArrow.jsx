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
    <div className={`scroll-arrow ${showScroll ? '' : 'hide'}`}>
      <span>View more</span>
      <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
    </div>
  );
}

export default ScrollArrow;
