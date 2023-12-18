import React from 'react'
import worldImage from '../assets/world.png'
import starImage from '../assets/star.png'
import xb from '../assets/xb.svg'
import ShapedTpButton from './ShapedTpButton'
import { BsTwitterX } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import supChain from '../assets/chain.svg';
import { Link } from 'react-router-dom';
import scrollImage from '../assets/scroll-icon.svg'
const MainBanner = () => {
    return (
        <section className='text-white text-center relative py-10 capitalize'>
            <h4 className='md:text-xl text-sm font-bold header-font md:tracking-[20px] tracking-widest'>RAPID ACCESS</h4>
            <h1 className='md:text-8xl text-5xl header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest'><span className='stroke-text'>ADVA</span>NCED</h1>
            <div className='md:w-[700px] w-full mx-auto relative z-[1] px-10 md:px-0'>  
                <h1 className='md:text-8xl text-5xl absolute top-7 left-1/2 transform -translate-x-1/2 header-font md:tracking-widest'>ANAL<span className='stroke-text'>YTICS</span></h1>
                <img src={worldImage} alt="world-image" className='w-full h-full object-contain green-gradient' />
                <h6 className='md:text-2xl text-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full tracking-wider'>ULTIMATE TOOL FOR ON-CHAIN TRADING</h6>
                <div className='flex items-center justify-center md:gap-10 gap-5 w-full absolute top-1/2 left-0'>
                    <ShapedTpButton label={'Join Portal'}/>
                    <ShapedTpButton label={'Dashboard'}/>
                </div>
            </div>
            <img src={starImage} alt="star" className='w-20 h-20 md:block hidden absolute bottom-1/2 right-52' />
            <div className='absolute bottom-0 right-0 w-1/3 z-0'>
                <img src={xb} alt="xb" className='w-full h-full object-contain'/>
            </div>
            <div className='flex items-end md:flex-row flex-col px-10 xl:-mt-52 lg:-mt-40 md:-mt-20 mt-20 w-fit md:w-full mx-auto'>
                <div className='w-72'>
                    <div className='flex items-start text-sm md:mb-20 text-left md:text-center'><img src={starImage} className='w-3 text-white' /><h6><span className='text-gray-400'>AI adapts to your risk tolerance and </span>autonomously executes trades.</h6></div>
                    <p className='text-white text-sm mb-5'>Support Chains</p>
                    <div>
                        <img src={supChain} alt="supported-chains" className='w-full h-full object-contain' />
                    </div>
                </div>

                <div className='text-2xl ml-auto w-fit flex md:flex-col gap-5 mr-20 z-10 mt-10'>
                    <Link to={'https://www.twitter.com'} target='_blank'><BsTwitterX/></Link>
                    <Link to={'https://wwww.github.com'} target='_blank'><FaGithub/></Link>
                    <Link to={'https://www.telegram.com'} target='_blank'><PiTelegramLogo/></Link>                 
                </div>
            </div>
            <div className='flex items-center flex-col absolute bottom-0 right-0 md:left-1/2 z-10 transform -translate-x-1/2 cursor-pointer'>
                <p>Scroll Down</p>
                <img src={scrollImage} alt="scroll-icon" className='w-10 h-10'/>
            </div>
        </section>
    )
}

export default MainBanner