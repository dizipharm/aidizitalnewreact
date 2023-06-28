import React from 'react'
import {
  BsArrowRight,
   
} from 'react-icons/bs'
import {CiPaperplane} from 'react-icons/ci'
import Mill from '../../assets/millets1.jpg'
import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'


const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[url("./assets/banner2.jpg")]  bg-no-repeat bg-cover flex flex-col justify-between ' >
       <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
       <div className="absolute inset-0 flex">
        <div className='grid md:grid-cols-2  max-w-[1240px] m-auto'>
            <div className='flex flex-col mt-10  justify-center md:items-start w-full px-2 py-8'>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3 mt-20 text-3xl md:text-5xl font-bold text-white flex flex-col'><span> Pioneering the future </span><br></br> Unleashing the potential of Blockchain and AI for a smarter world</h1>
                <p className='text-xl mt-2 text-white'> To innovate and deliver exceptional products and services that exceed customer’s expectation
                </p>
                <div className='flex gap-2 pt-4'>
              
          <Link to='/about'>
                <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Why AI Dizital <BsArrowRight className=' m-1 text-white'/>
          </button>
          </Link>
          <Link to='/contact'>
          <button type="button" className="btn btn-outline text-white ">
            Book a Consultation  <BsArrowRight className=' ml-4'/>
        </button></Link>
          
                </div>
            </div>
           {/* <div className=' mt-40' >
            <img src={Mill} alt='Mill'/>
           </div> */}
           
        </div>
        </div>
    </div>
  )
}

export default Hero