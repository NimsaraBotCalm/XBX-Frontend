import React from 'react'
import starImage from '../assets/star.png'
import ShapedTpButton from './ShapedTpButton'
import upChart from '../assets/up.svg'
import borderBOx from '../assets/tool-box.svg'
import mobileBorderBox from '../assets/mobile-tool-box.svg'
import moneyIcon from '../assets/money-icon.svg'
const XBXTools = () => {
    return (
        <section className='text-white py-40 text-center xl:px-20 lg:px-10 green-gradient-sm'>
            <h1 className='md:text-8xl text-5xl header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest'><span className='stroke-text'>XBX </span>TOOLS</h1>
            <br />
            <div className='flex items-start ml-auto text-sm md:mb-20 text-left md:text-center w-52'><img src={starImage} className='w-3 text-white' /><h6><span className='text-gray-400'>AI adapts to your risk tolerance and </span>autonomously executes trades.</h6></div>
            <div className='content-between flex-row lg:flex hidden xl:gap-5 xl:p-10 p-0 gap-1'>
                <div className='w-1/4 relative'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5'>ANALYTICS<br/>TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-1/4 relative'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5'>ANALYTICS<br/>TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-1/4 relative'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5'>ANALYTICS<br/>TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-1/4 relative'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5'>ANALYTICS<br/>TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
            </div>
            <div className='content-between flex-col lg:hidden flex gap-10 mt-10'>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-32 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-32 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-32 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-32 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default XBXTools