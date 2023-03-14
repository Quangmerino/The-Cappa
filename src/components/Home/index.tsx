import React from 'react'
import SliderHome from '../Slider'
import Header from '../Layouts/Header'

function HomePage() {
  return (
    <div className='relative min-h-screen'>
        <div className='absolute top-0 left-0 right-0 z-10'>
            <Header/>
        </div>
        <SliderHome/>
    </div>
  )
}

export default HomePage