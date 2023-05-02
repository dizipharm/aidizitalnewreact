import React from 'react'
import {
    BsArrowRight,
     
  } from 'react-icons/bs'
  import {CiPaperplane} from 'react-icons/ci'
  import Mill from '../../assets/millets1.jpg'
  import {Link} from 'react-router-dom'

const Section6 = () => {
  return (
  <>
  <div className=' w-full pt-8 px-4 text-black'>
  <div className=' grid grid-flow-row sm:grid-flow-col gap-8  bg-black text-white  '>
  <div className=' flex flex-col  lg:p-12 md:p-12 text-3xl text-center'>
    <h1>Learn</h1>
  <h1>More</h1>    
  <h1 className=' text-[#17b1b1]'> About Us</h1> 
   </div>
  <div className=' flex flex-col  lg:pt-16 md:pt-16'>
  <div className='   '>
    <p className=' text-white py-0 pb-15'>Become one of the visionary businesses producing new value, rewriting the rules of your industry and changing the way the world works together.

    </p>
  </div>
  <div className=' flex lg:flex-row  md:flex-row  sm:flex-col gap-2 pt-4 p-2'>
                  
                <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Why AI Dizital <BsArrowRight className=' m-1 text-white'/>
          </button>
          <Link to='/contact'>
          <button type="button" className=" bg-transparent gap-4 flex p-2 text-white ">
            Book a Consultation  <BsArrowRight className=' m-1 text-white '/>
        </button></Link>
          
                </div>
  </div>

  </div>
  </div>
  </>
  )
}

export default Section6
