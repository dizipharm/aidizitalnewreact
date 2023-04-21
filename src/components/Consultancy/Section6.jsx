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
  <div className=' w-full pt-8 px-4'>
  <div className=' flex gap-8  bg-black text-white  '>
  <div className=' flex flex-col  p-12 text-3xl text-center'>
    <h1>Learn</h1>
  <h1>More</h1>    
  <h1 className=' text-[#17b1b1]'> About Us</h1> 
   </div>
  <div className=' flex flex-col  pt-16'>
  <div className='   '>
    <p className=' text-white py-0 pb-15'>Become one of the visionary businesses producing new value, rewriting the rules of your industry and changing the way the world works together.

    </p>
  </div>
  <div className='flex gap-2 pt-4'>
                  
                <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Why AI Dizital <BsArrowRight className=' m-1 text-white'/>
          </button>
          <Link to='/contact'>
          <button type="button" className="btn btn-outline text-white ">
            Book a Consultation  <BsArrowRight className=' ml-4'/>
        </button></Link>
          
                </div>
  </div>

  </div>
  </div>
  </>
  )
}

export default Section6
