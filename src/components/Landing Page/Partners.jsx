import React from 'react'
import Tcube from '../../assets/Newlogo.png'
import Onesg from '../../assets/onesg_logo.png'
import Trace from '../../assets/tracepharm.jpg'

const Partners = () => {
  return (
    <div className=" h-screen bg-base-200">
    <div className= " hero text-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold pt-12 ">Our Solutions</h1>
        <p className="py-6">Our blockchain consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case.</p>
       <div className=' flex gap-4'>
       <a href='' > <img className=' w-60 h-16' src={Trace}alt='tracepharm'/></a>
       <a href='' > <img className=' w-60 h-16' src={Tcube}alt='tcube'/></a>
        <a href='' > <img className=' w-60 h-16' src={Onesg}alt='onrsg'/></a>
        </div> 
      </div>
    </div>
  </div>
  )
}

export default Partners
