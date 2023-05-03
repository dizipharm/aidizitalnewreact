import React from 'react'
import {
    BsArrowRight,
     
  } from 'react-icons/bs'
  import {CiPaperplane} from 'react-icons/ci'
  import Mill from '../../assets/millets1.jpg'
  import {Link} from 'react-router-dom'

const New3 = () => {
  return (
  <>
  <div className=' w-full pt-8 px-4'>
  <div className=' flex flex-col md:flex-row md:gap-8  bg-black text-white justify-center '>
  <div className=' flex   p-12 text-3xl text-center'>
    <h1>Explore With Us <span className=' text-[#17b1b1] '> The Platform</span>  </h1>
 
   </div>
  <div className=' items-center p-4 px-12 md:pt-12'>
  
  
            <Link to='/contact'>
            <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Get A Free Consultation <BsArrowRight className=' m-1 text-white'/>
          </button></Link>      
               
         
          
               
  </div>

  </div>
  </div>
  </>
  )
}

export default New3
