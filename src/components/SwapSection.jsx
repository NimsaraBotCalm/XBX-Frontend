import React from 'react'
import swapdesk01 from '../assets/swap-box-1.svg';
import swapdesk02 from '../assets/swap-box-2.svg';
import swapdesk01Mobile from '../assets/swap-box-1-mobile.svg'
import swapdesk02Mobile from '../assets/swap-box-2-mobile.svg'
import starImage from '../assets/star.png'
import { FaGreaterThan } from "react-icons/fa";
const SwapSection = () => {
    return (
        <section className='text-white xl:px-20 px-10 pb-20 max-w-[2000px] mx-auto'>
            <h1 className='text-center xl:text-8xl md:text-5xl text-3xl header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest mb-10 md:mb-6 xl:mb-3'><span className='stroke-text'>SWAP </span>AND<br /> SNIPER <span className='stroke-text'>BOT</span> TIERS</h1>
            {/* DESKTOP */}
            <div className='mb-10 md:mb-0 relative justify-between lg:px-10 items-center flex lg:flex-row flex-col-reverse'>
                <div className='lg:w-1/2 w-full relative green-gradient-sm md:backdrop-blur-md'>
                    <img src={swapdesk01} className='w-full h-full object-contain lg:block hidden' />
                    <img src={swapdesk01Mobile} className='w-full h-full object-contain block lg:hidden' />
                    <div className='absolute md:top-3 top-10 left-0 w-full xl:px-20 px-10 xl:py-0 lg:py-10 md:py-28'>
                        <div className='w-full text-left md:ml-auto xl:mt-10 md:mr-16'>
                            <h1 className='md:text-4xl text-xl font-bold md:text-right'>XBX BOT</h1>
                            <p className='text-gray-300 md:text-right text-xs md:text-sm'>FEES : 0.8%</p>
                        </div>

                        <ul className='xl:mt-0 mt-10'>
                            <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Multichain Sniper & Trading Bot</li>
                            <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Uniswap V3</li>
                            <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Bribing & Bundle Submission</li>
                            <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Wallet Limit</li>
                            <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Invite Keys</li>
                        </ul>
                    </div>
                </div>
                <div className='lg:w-52 flex items-start text-sm md:mb-20 text-left md:text-center my-10 md:my-0'><img src={starImage} className='w-3 text-white' /><h6><span className='text-gray-400'>AI adapts to your risk tolerance and </span>autonomously executes trades.</h6></div>
            </div>
            <div className='lg:w-1/2 relative blue-gradient-sm ml-auto lg:-mt-52'>
                <img src={swapdesk02} className='w-full h-full object-contain lg:block hidden' />
                <img src={swapdesk02Mobile} className='w-full h-full object-contain block lg:hidden' />

                <div className='absolute md:top-3 top-10 left-0 w-full xl:px-20 px-10 xl:py-0 lg:py-10 md:py-28'>
                    <div className='w-60 ml-auto xl:mt-10 mr-16'>
                        <h1 className='md:text-4xl text-xl font-bold text-right'>ANALYTICS</h1>
                        <p className='text-gray-300 text-right text-xs md:text-sm'>LIMITED ACCESS</p>
                    </div>

                    <ul className='xl:mt-10 mt-10'>
                        <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Multichain Sniper & Trading Bot</li>
                        <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Uniswap V3</li>
                        <li className='flex items-center gap-2 xl:mb-4 text-xs md:text-sm'><FaGreaterThan />Bribing & Bundle Submission</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SwapSection