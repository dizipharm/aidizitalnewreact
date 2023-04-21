import React from 'react'
import {
  BsArrowRight,
   
} from 'react-icons/bs'
import {CiPaperplane} from 'react-icons/ci'
import Mill from '../../assets/millets1.jpg'
import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'
import Navbar from '../Landing Page/Navbar'
import Footer from '../Landing Page/Footer'
import Trade2 from './Trade2'


const Trade = () => {
  return (
    <>
    <Navbar/>
    <div  className='w-full h-screen relative bg-[url("./assets/trade_banner.jpg")] bg-[50%]   bg-no-repeat bg-cover flex flex-col justify-between ' >
        <div className='grid md:grid-cols-2  max-w-[1240px]  pt-40 pl-8'>
            <div className='flex flex-col mt-10  justify-center md:items-start w-full px-2 py-8'>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3 mt-20 text-3xl md:text-5xl font-bold text-white flex flex-col '>Art & FairTrade </h1>
                <p className='text-xl mt-2 text-white'>  </p>
                <div className='flex gap-2 pt-4'>
                  
                {/* <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Why AI Dizital <BsArrowRight className=' m-1 text-white'/>
          </button> */}
          <Link to='/contact'>
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white ">
            Book a Consultation  <BsArrowRight className=' ml-4'/>
        </button></Link>
          
                </div>
            </div>
           {/* <div className=' mt-40' >
            <img src={Mill} alt='Mill'/>
           </div> */}
           
        </div>
    </div>
    <Trade2/>
    <Footer/>
    </>
  )
}

export default Trade