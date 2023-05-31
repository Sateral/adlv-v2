import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='h-[20%] bg-secondary border-t-[3px] text-primary text-[12px] font-sans flex justify-around items-center flex-wrap'>
      <div className="my-8">
        <ul>
          <li className='list-none'>
            <Link href="/Contact" className='no-underline'>
              <h2 className='underline mb-1'>Find Us</h2>
            </Link>
          </li>
        </ul>
        <h3 className='mb-1'>
          <i className="fa-solid fa-envelope"></i> kopylenkoa@gmail.com
        </h3>
        <h3 className='mb-1'>
          <i className="fa-solid fa-phone"></i> 905-460-7778
        </h3>
        <h3 className='mb-1'>Georgetown</h3>
        <h3 className='mb-1'>Halton Hills ON, Canada</h3>
      </div>
      <div className="footer-right">
        <h3>© 2023 Aurore de la Vie</h3>
      </div>
    </footer>
  )
}

export default Footer