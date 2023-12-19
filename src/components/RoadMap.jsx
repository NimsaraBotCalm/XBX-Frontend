import React from 'react'

const RoadMap = () => {
  return (
    <section className='text-white xl:px-20 px-10 pb-20 max-w-[2000px] mx-auto relative'>
    <h1 className='text-center xl:text-8xl md:text-5xl text-3xl header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest mb-10 md:mb-3'><span className='stroke-text'>XBX </span>ROADMAP</h1>
    <div className='my-20 flex items-center justify-between md:flex-row flex-col gap-5 md:gap-0 z-10'>
        <div className='flex items-center justify-between w-full md:w-1/3 text-white md:px-10'>
            <p className='text-xs'>IN PROGRESS</p>
            <div className='w-1/2 bg-gray-500 rounded-full'>
                <div className='w-full bg-white p-1 rounded-full'>

                </div>
            </div>
            <p className='text-xs'>100%</p>
        </div>
        <div className='flex items-center justify-between w-full md:w-1/3 text-white md:px-10'>
            <p className='text-xs'>BETA TESTING</p>
            <div className='w-1/2 bg-gray-500 rounded-full'>
                <div className='w-4/5 bg-white p-1 rounded-full'>

                </div>
            </div>
            <p className='text-xs'>86%</p>
        </div>
        <div className='flex items-center justify-between w-full md:w-1/3 text-white md:px-10 z-10'>
            <p className='text-xs'>READY</p>
            <div className='w-1/2 bg-gray-500 rounded-full'>
                <div className='w-1/2 bg-white p-1 rounded-full'>

                </div>
            </div>
            <p className='text-xs'>50%</p>
        </div>
    </div>
    <div className='green-gradient-sm w-[500px] aspect-square absolute right-0 top-0 z-0'>

    </div>
    </section>
  )
}

export default RoadMap