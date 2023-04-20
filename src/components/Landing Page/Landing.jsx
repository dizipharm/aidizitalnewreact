import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Enterprise from './Enterprise'
import Footer from './Footer'
import NewSlide from './NewSlide'
import Partners from './Partners'
import Whatwedo from './Whatwedo'
import Ourapproach from './Ourapproach'
import Getstarted from './Getstarted'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      {/* <Layouts/> */}
     <Hero/>
     <Partners/>
     {/* <NewSlide/> */}
     <Enterprise/>
     <Whatwedo/>
     <Ourapproach/>
     <Getstarted/>
     <Footer/>
    </div>
  )
}

export default Landing
