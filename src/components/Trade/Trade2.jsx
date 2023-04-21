import React from 'react'
import {
  BsArrowRight,
   
} from 'react-icons/bs'
import {CiPaperplane} from 'react-icons/ci'
import Mill from '../../assets/indeloom.png'
import Trace from '../../assets/indeloom.webp'

import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'
import Navbar from '../Landing Page/Navbar'
import Footer from '../Landing Page/Footer'


const Trade2 = () => {
  return (
    <>
   
    <div name='home' className='w-full  relative  pt-8 font-sans  flex flex-col justify-between ' >
        <h1 className=' text-4xl font-bold text-center '> Art <span className=' text-[#17b1b1]'>& FairTrade</span></h1>
        <div className='grid md:grid-cols-2  max-w-[1240px] '>
        <div className=' p-4' >
            <img src={Mill} alt='Mill'/>
           </div>
            <div className='flex flex-col  justify-center md:items-start w-full px-2 py-8 pl-12 pt-4'>
            <img src={Trace} alt='trace'/>
                <h1 className='py-3  text-2xl md:text-3xl font-bold text-blacj flex flex-col'> Case Study - Enabling Better Trust And <span className='text-[#17b1b1]'>Transparency</span>  For Fashion Brands.</h1>
                <p className='text-lg mt-2 text-black '>Fashion brands are increasingly keen to tout their green credentials, but with clothes production often involving complex global supply chains. AI Dizital has helped Inde' Loom, a leading D2C fairtrade online sustainable fashion brand to make their supply chain more transparent which involves sourcing sustainable raw materials.
                </p>
                <p className='text-lg mt-2 text-black '> According to a study from McKinsey, 75% of customers consider trust and transparency to be an important purchasing factor. Ignoring that majority risks losing them to a competitor that has done their due diligence.
                </p>
                <p className='text-lg mt-2 text-black '> We enabled Indeloom products to be more traceable, transparent using our blockchain technology enabling ethical, fairtrade, luxury fashion using Block Chain.
                 </p>
               
            </div>
         
           
        </div>
    </div>
  
    </>
  )
}

export default Trade2