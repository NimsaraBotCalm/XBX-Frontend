import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import MainBanner from '../components/MainBanner'
import XBXTools from '../components/XBXTools'
import SwapSection from '../components/SwapSection'
import Excellence from '../components/Excellence'
import Footer from '../components/Footer'
import RoadMap from '../components/RoadMap'
import ThreeSteps from '../components/ThreeSteps'
import scrollImage from '../assets/scroll-icon.svg'

const LandingPage = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const targetPosition = isAtTop ? document.body.scrollHeight : 0;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    setIsAtTop(!isAtTop);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const isTop = window.scrollY === 0;
      if (isTop !== isAtTop) {
        setIsAtTop(isTop);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [isAtTop]);


  return (
    <main className='bg-noise-image relative'>
      <TopNav />
      <MainBanner />
      <XBXTools />
      <SwapSection />
      <Excellence />
      <RoadMap />
      <ThreeSteps />
      <Footer />
      <div
        className='flex items-center flex-col sticky bottom-5 left-[95%] z-10 cursor-pointer text-white w-fit'
        onClick={handleScroll}
      >
        <p className='text-xs'>{isAtTop ? 'Scroll Down' : 'Scroll Up'}</p>
        <img src={scrollImage} alt='scroll-icon' className={`w-10 h-10 ${isAtTop ? '' : 'rotate-180'}`} />
      </div>
    </main>
  )
}

export default LandingPage