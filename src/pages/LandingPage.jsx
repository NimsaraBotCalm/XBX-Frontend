import React from 'react'
import TopNav from '../components/TopNav'
import MainBanner from '../components/MainBanner'
import XBXTools from '../components/XBXTools'

const LandingPage = () => {
  return (
    <main className='bg-noise-image'>
    <TopNav/>
    <MainBanner/>
    <XBXTools/>
    </main>
  )
}

export default LandingPage