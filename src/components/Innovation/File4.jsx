import React from 'react'
import {
    BsArrowRight,
     
  } from 'react-icons/bs'

const File4 = () => {
  return (
   <>
    <div className=' grid grid-flow-row sm:grid-flow-col col-span-4 sm:col-span-0   lg:gap-32 md:gap-8 px-8'>
    <div className='   '>
    <h1 className=' text-4xl font-bold text-black'>
            Blockchain <br/>
            <span className=' text-[#17b1b1] text-4xl font-bold'>
            Use Cases 
        </span>
        </h1>
     
    </div>
    <div className='  flex flex-col gap-3'>
    <div>
        <p className=' text-md'>
        Explore our informational guides to gain a deeper understanding of various aspects of blockchain such as how it works, ways to use it and considerations for implementation.

        </p>
    </div>
    <div className=' grid sm:grid-cols-2 lg:grid-cols-3  text-[#17b1b1]'>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Cross-Border Transactio </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Digital Voting </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Internet of Things(IoT) </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Smart Appliances </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />IoT monitoring </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Smart Contracts </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Supply chain management</li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Financial data recording and management </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Copyright management </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Clinical trial tracking </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Property ownership transfer </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Personal Identity Protection </li>
    <li className=' flex gap-2' ><BsArrowRight className=' mt-1 font-bold' />Digital IDs </li>


         
    </div>

    </div>
      
      </div>
   </>
  )
}

export default File4
