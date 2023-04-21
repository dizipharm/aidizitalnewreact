import React from 'react'
import {
  BsArrowRight,
   
} from 'react-icons/bs'
import {CiPaperplane} from 'react-icons/ci'
import Mill from '../../assets/fda-compliance.jpg'
import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'
import Navbar from '../Landing Page/Navbar'
import Footer from '../Landing Page/Footer'


const Section2 = () => {
  return (
    <>
   
    <div name='home' className='w-full h-screen relative bg-[white] font-sans  flex flex-col justify-between ' >
        <div className='grid md:grid-cols-2  max-w-[1240px] m-auto'>
            <div className='flex flex-col  justify-center md:items-start w-full px-2 py-8'>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3  text-3xl md:text-5xl font-bold text-blacj flex flex-col'>Helping With<span className=' text-[#17b1b1]'>FDA Compliance</span>  </h1>
                <p className='text-xl mt-2 text-black'> The FDA will be proposing new food traceability rules and requirements for food safety.
                </p>
                <p className='text-xl mt-2 text-black'> Our platform helps you with Compliance and simplify regulatory paperwork with our advance digital reporting dasboards
                </p>
                <div className='flex gap-2 pt-4'>
{/*                   
                <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Why AI Dizital <BsArrowRight className=' m-1 text-white'/>
          </button>
          <Link to='/contact'>
          <button type="button" className="btn btn-outline text-white ">
            Book a Consultation  <BsArrowRight className=' ml-4'/>
        </button></Link>
           */}
                </div>
            </div>
           <div className=' ' >
            <img src={Mill} alt='Mill'/>
           </div>
           
        </div>
    </div>
  
    </>
  )
}

export default Section2