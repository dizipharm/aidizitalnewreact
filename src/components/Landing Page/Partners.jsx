import React from 'react'
import Tcube from '../../assets/Newlogo.png'
import Onesg from '../../assets/onesg_logo.png'
import Trace from '../../assets/tracepharm.jpg'
import {Link} from 'react-router-dom'
import {
  BsArrowRight,
   
} from 'react-icons/bs'

const Partners = () => {
  return (
    <div className="  bg-gray-100 text-black">
    <div className= " ">
      <div className=" text-center">
        <h1 className="text-5xl font-bold pt-12 text-center ">Our Products and Services</h1>
        <p className="py-6  ">Our Blockchain and AI Consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case.</p>
       <div className=' grid grid-flow-row sm:grid-flow-col gap-6 col-span-6 w-screen   px-8 '>
       <div className=' flex flex-col gap-2  '>
       <a href='' > 
       <img className=' w-60 h-16' src={Trace} alt='tracepharm'/>
       </a>
<p className=' text-left'>Our market intelligence platform can be an invaluable tool for businesses with complex supply chains. It can help businesses to better understand market trends, identify potential risks and opportunities, and make informed decisions about their supply chain operations.

</p>
<Link to='/contact' className=' '>
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white  ">
            Know More  <BsArrowRight className=' ml-4 mt-1'/>
        </button></Link>
       </div>
       <div className=' flex flex-col gap-2 '>
       <a href='' > <img className=' w-60 h-16' src={Tcube} alt='tcube'/></a>
<p className=' text-left'>One way to enable a business to create a unique identification for its products and provide visibility across the supply chain using advanced digital tracking system.

</p>
<Link to='/contact' className=' lg:pt-12 sm:pt-1' >
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2  text-white  ">
            Know More  <BsArrowRight className=' ml-4 mt-1'/>
        </button></Link>
       </div>
       <div className=' flex flex-col gap-2 '>
       <a href='' > <img className=' w-60 h-16' src={Onesg}alt='onrsg'/></a>
<p className=' text-left'>SaaS Platform built for construction companies, clients, architects and building suppliers to track all ESG assets to support UN sustainability net zero goals for 2050

</p>
<Link to='/contact' className=' lg:pt-12 sm:pt-1'>
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white  ">
            Know More  <BsArrowRight className=' ml-4 mt-1'/>
        </button></Link>
       </div>
        </div> 
      </div>
    </div>
  </div>
  )
}

export default Partners
