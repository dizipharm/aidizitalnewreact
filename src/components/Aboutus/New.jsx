import React from 'react'
import Img1 from './../../assets/story.png'
import Img2 from './../../assets/vision.png'


const New = () => {
  return (
  <>
    <div className=' w-full h-screen flex gap-4 pt-8 px-8'>
    <h1 className=' w-3/12 text-4xl'>
        About <span className=' text-[#17b1b1]'>Us</span>
    </h1>
    <div className=' w-9/12 flex flex-col gap-4'>
    <div>
        <h1 className=' text-3xl mr-40'>
        Your Partner Into Future Of Deep Tech Digital Transformation Using <span className=' text-[#17b1b1]'>Blockchain & AI</span> 
        </h1>
    </div>
    <div className=' flex'>
    <div className=' flex flex-col gap-2'>
        <img className=' w-20 h-20' src={Img2} alt='img1'/>
        <h1 className=' text-2xl font-bold'> Our Vision</h1>
        <p className=' text-lg'> We are helping Companies solve their technology challenges with help of Deep Tech, we are building solutions that can deliver real-time solutions to achieve business & operational excellence and discover untapped potential across your business value chain.

        </p>

    </div>
    <div className=' flex flex-col gap-2'>
        <img className=' w-20 h-20' src={Img1} alt='img2'/>
        <h1 className=' text-2xl font-bold'> Our Story</h1>
        <p className=' text-lg'> We are a team of technology professionals with in-depth experience in Blockchain, AI, ML, Cybersecurity based in the UK who started our journey in 2021.We are creating: An Easy. Flexible. Scalable - Innovative Technology platforms.
         </p>

    </div>

    </div>
    </div>
      </div>
  </>
  )
}

export default New
