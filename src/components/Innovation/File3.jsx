import React from 'react'
import Mill from '../../assets/get-started.jpg'
import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'
import {
    BsArrowRight,
     
  } from 'react-icons/bs'

const File3 = () => {
  return (
   
    <div>
       <div name='home' className='w-full h-screen bg-white flex flex-col justify-between px-16  ' >
        <div className='grid md:grid-cols-2  max-w-[1240px] m-auto gap-8'>
        <div className=' ' >
            <img src={Mill} alt='Mill'/>
           </div>
            <div className='flex flex-col   justify-center md:items-start w-full px-2 '>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3  text-3xl md:text-4xl font-semibold  text-black flex flex-col'>Get Started <span className=' text-[#17b1b1]'> With Blockchain</span></h1>
                <p className='text-lg mt-2 text-black'> We help you with your needs for new technology developments milestones, our expert team is hands-on with various blockchain technologies to guide you in your blockchain journey, please write us in with your Blockchain Challenge -We shall help you get started.
                 </p>
                 <Link to='/contact'>
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white">
            Book a Consultation  <BsArrowRight className=' ml-4 mt-1'/>
        </button></Link>
                {/* <div className='flex gap-2 pt-4'>
                  
                <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"  >
              Why AI Dizital <BsArrowRight className=' m-1 text-white'/>
          </button>
          <Link to='/contact'>
          <button type="button" className="btn btn-outline text-white ">
            Book a Consultation  <BsArrowRight className=' ml-4'/>
        </button></Link>
          
                </div> */}
            </div>
         
           
        </div>
    </div>
    </div>
  )
}

export default File3
