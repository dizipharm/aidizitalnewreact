import React from 'react'
import {
  BsArrowRight,
   
} from 'react-icons/bs'
import {CiPaperplane} from 'react-icons/ci'
import Mill from '../../assets/tracepharm-screen.jpeg'
import Trace from '../../assets/tracephrmlogoneww.jpg'

import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'
import Navbar from '../Landing Page/Navbar'
import Footer from '../Landing Page/Footer'


const Trace2 = () => {
  return (
    <>
   
    <div name='home' className='w-full  relative bg-gray-100 pt-8 font-sans  flex flex-col justify-between ' >
        <h1 className=' text-4xl font-bold text-center '> Supply <span className=' text-[#17b1b1]'>Chain</span></h1>
        <div className='grid md:grid-cols-2  max-w-[1240px] '>
            <div className='flex flex-col  justify-center md:items-start w-full px-2 py-8 pl-12 pt-4'>
            <img className=' w-60' src={Trace} alt='trace'/>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3  text-2xl md:text-3xl font-bold text-blacj flex flex-col'> Case Study - Connecting The Dots
In Pharma Supply Chains For Market Intelligence</h1>
                <p className='text-lg mt-2 text-black '> Creating a powerful architectural technology with the potential to impact enterprise and B2B ecosystems requires a deep understanding of blockchain technology and its potential applications beyond bitcoin and cryptocurrency. Our company helps businesses unlock the full potential of blockchain technology by developing enterprise blockchain solutions tailored to their specific needs.
                 </p>
                <p className='text-lg mt-2 text-black '> Our team of experts works closely with our clients to understand their business requirements, identify areas where blockchain can add value, and design custom blockchain solutions from scratch. We help businesses integrate their existing IT systems with external blockchains, enabling secure and efficient data transfer and improving the overall performance of their enterprise ecosystems.
                 </p>
                 <Link to='https://www.tracepharm.com/'>
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white">
            Know More  <BsArrowRight className=' ml-4 mt-1'/>
        </button></Link>
             
            </div>
           <div className=' pt-4' >
            <img src={Mill} alt='Mill'/>
           </div>
           
        </div>
    </div>
  
    </>
  )
}

export default Trace2