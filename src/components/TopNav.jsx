import React from 'react'
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import { FaChevronDown } from "react-icons/fa";
import BlueRadialGradient from './BlueRadialGradient';
const TopNav = () => {
    return (
        <div className='flex items-center justify-between bg-black'>
            <div className='w-1/2'>
                <div className='w-32 h-32 xl:ml-auto xl:mr-0 mr-auto'>
                    <img src={logo} alt="logo" className='w-full h-full object-contain' />
                </div>
            </div>
            <nav className='w-1/2 items-center justify-center md:flex hidden'>
                <div className='mr-10'>
                    <span className='text-gray-500 font-bold'>/ 01</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Products</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='mr-10'>
                    <span className='text-gray-500 font-bold'>/ 02</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Socials</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='mr-10'>
                    <span className='text-gray-500 font-bold'>/ 03</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Dashboard</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div>
                    <span className='text-gray-500 font-bold'>/ 04</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Docs</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
            </nav>
            <div className='w-14 h-14 md:hidden block'>
                <img src={menu} alt="menu" className='w-full h-full object-contain' />
            </div>
            <BlueRadialGradient className={'w-52'}/>
        </div>
    )
}

export default TopNav