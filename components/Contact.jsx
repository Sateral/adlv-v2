"use client";

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }

  function handlePhoneNumberChange(e) {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_trkrlka', 'template_fv0he2u', e.target, 'fzE5ne1uhl9Hg32BC');

    e.target.reset();

    setPhoneNumber('');
  }

  return (
    <div className="h-full w-full bg-secondary text-whitesmoke text-[20px] p-[20px] border-t-4">
      <h2 className='text-center px-[50px] pb-[30px] font-jost text-[36px] font-semibold'>Contact Us!</h2>
      <form id="survey-form" onSubmit={(e) => {
        sendEmail(e);
        handleSubmit(e);
      }} >
        <fieldset className="w-full max-w-[800px] m-auto border-none">
          <input type="hidden" name="_captcha" value="false" />

          <label htmlFor="name" id="name-label">Name:</label>
          <input className="p-2 my-[10px] mb-[25px] w-full h-[50px] border-none rounded-[5px] font-jost text-secondary" name="name" type="text" id="name" placeholder="Please enter your name" required />
          
          <label htmlFor="email" id="email-label">Email Address:</label>
          <input className="p-2 my-[10px] mb-[25px] w-full h-[50px] border-none rounded-[5px] font-jost text-secondary" type="email" id="email" name="email" placeholder="Please enter your email" required />
          
          <label htmlFor="phone" id="phone-label">Phone number:</label>
          <input
              className="p-2 my-[10px] mb-[25px] w-full h-[50px] border-none rounded-[5px] font-jost text-secondary"
              type="tel"
              id="phone"
              name="PhoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Please enter your phone number"
              required
            />
          <label htmlFor="questions">Any questions?</label>
          
          <textarea id="questions" name="message" rows="3" cols="50" placeholder="Please enter any questions you have" className='block h-[100px] w-full rounded-[5px] border-none font-jost mt-[10px] p-[10px] text-secondary'></textarea>
          
          <div className='w-full flex justify-center items-center'>
            <button className="bg-white m-8 text-secondary py-2 px-6 rounded-lg font-jost hover:bg-[#141414] hover:text-primary transition duration-50 ease-out" type="submit">Submit</button>
          </div>
        </fieldset>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 rounded-xl">
          <div className="bg-[#3b3b3b] border-8 border-[#26a130] p-8 text-6xl rounded-xl shadow-lg font-jost">
            <p className="text-center">Submitted</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact