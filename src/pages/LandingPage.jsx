import React from 'react'
import TopNav from '../components/TopNav'
import MainBanner from '../components/MainBanner'
import XBXTools from '../components/XBXTools'
import SwapSection from '../components/SwapSection'

const LandingPage = () => {
  return (
    <main className='bg-noise-image'>
    <TopNav/>
    <MainBanner/>
    <XBXTools/>
    <SwapSection/>
    </main>
  )
}

export default LandingPage