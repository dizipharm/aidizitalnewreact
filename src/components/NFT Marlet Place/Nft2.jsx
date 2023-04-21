import React from 'react'
import {
  BsArrowRight,
   
} from 'react-icons/bs'
import {CiPaperplane} from 'react-icons/ci'
import Mill from '../../assets/nft-future.jpg'
import Trace from '../../assets/tracephrmlogoneww.jpg'

import {Link} from 'react-router-dom'
import Banner1 from '../../assets/banner1.jpg'
import Navbar from '../Landing Page/Navbar'
import Footer from '../Landing Page/Footer'


const Nft2 = () => {
  return (
    <>
   
    <div name='home' className='w-full  relative  pt-8 font-sans  flex flex-col justify-between ' >
        <h1 className=' text-4xl font-bold text-center '> NFT <span className=' text-[#17b1b1]'>& Marketplaces</span></h1>
        <div className='grid md:grid-cols-2  max-w-[1240px] '>
        <div className=' p-4' >
            <img src={Mill} alt='Mill'/>
           </div>
            <div className='flex flex-col  justify-center md:items-start w-full px-2 py-8 pl-12 pt-4'>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3  text-2xl md:text-3xl font-bold text-blacj flex flex-col'> Creating Future With <span className=' text-[#17b1b1]'>NFT Solutions</span></h1>
                <p className='text-lg mt-2 text-black '>permissioned & attract the right users and reduce risk with better access control.
                </p>
                <p className='text-lg mt-2 text-black '> Helping your customer’s privacy comes first.
                </p>
                <p className='text-lg mt-2 text-black '> Helping you create a online community with top notch security standards.
                 </p>
               
            </div>
         
           
        </div>
    </div>
  
    </>
  )
}

export default Nft2