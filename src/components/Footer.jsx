import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import scrollImage from '../assets/scroll-icon.svg'

const Footer = () => {
  const date = new Date();
  return (
    <footer className='relative py-10 flex items-center md:flex-row flex-col justify-between md:gap-0 gap-5 text-white xl:px-20 px-10'>
      {/* <div className='flex items-center flex-col absolute -top-5 right-0 md:left-1/2 z-10 transform -translate-x-1/2 cursor-pointer'>
        <img src={scrollImage} alt="scroll-icon" className='w-10 h-10 rotate-180' />
        <p>Scroll Up</p>
      </div> */}
      <div className='text-2xl w-fit flex gap-5'>
        <Link to={'https://www.twitter.com'} target='_blank'><BsTwitterX /></Link>
        <Link to={'https://wwww.github.com'} target='_blank'><FaGithub /></Link>
        <Link to={'https://www.telegram.com'} target='_blank'><PiTelegramLogo /></Link>
      </div>
      <div className='w-fit xl:absolute xl:left-1/2 xl:bottom-10 transform xl:-translate-x-1/2 text-center'>
        © Copyright {date.getFullYear()} Content
      </div>
      <nav className=' items-center justify-end xl:flex hidden w-fit md:leading-snug'>
        <div className='mr-10'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 01</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1'>Products</h6>
            <FaChevronUp className='text-xs' />
          </div>
        </div>
        <div className='mr-10'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 02</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1'>Socials</h6>
            <FaChevronUp className='text-xs' />
          </div>
        </div>
        <div className='mr-10'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 03</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1'>Dashboard</h6>
            <FaChevronUp className='text-xs' />
          </div>
        </div>
        <div>
          <span className='text-gray-500 font-bold md:block hidden'>/ 04</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1'>Docs</h6>
            <FaChevronUp className='text-xs' />

          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer