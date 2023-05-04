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
import Members from './Members'


const Team = () => {
  return (
    <>
    <Navbar/>
    <div name='home' className='w-full h-screen relative bg-[url("./assets/team_banner.jpg")] bg-[50%]   bg-no-repeat bg-cover flex flex-col justify-between ' >
    <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
<div className="absolute inset-0 flex">
        <div className=' max-w-[1240px] m-auto'>
            <div className=' mt-10  justify-center md:items-start w-full px-2 py-8'>
                {/* <p className='text-xl mt-14 text-white'>Millets are important crops in the semiarid tropics of Asia and Africa (especially in South India, Mali, Nigeria, and Niger), with 97% of millet production in developing countries. This crop is favored due to its productivity and short growing season under dry, high-temperature conditions. </p> */}
                <h1 className='py-3 mt-20 text-3xl md:text-5xl font-bold text-white flex flex-col text-center'>Leadership Team </h1>
                {/* <p className='text-xl mt-2 text-white'> We are helping Start-Up's with their dApps challenges in crypto-native communities, NFT platforms & marketplaces, and DAOs.
                </p> */}
              
            </div>
         
        </div>
        </div>
    </div>
  <Members/>
    <Footer/>
    </>
  )
}

export default Team