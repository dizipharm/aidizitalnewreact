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
    <div className=" h-screen bg-base-200">
    <div className= " hero text-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold pt-12 ">Our Solutions</h1>
        <p className="py-6">Our blockchain consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case.</p>
       <div className=' flex gap-4 justify-between'>
       <div className=' flex flex-col gap-2 w-1/3 '>
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
       <div className=' flex flex-col gap-2 w-1/3'>
       <a href='' > <img className=' w-60 h-16' src={Tcube} alt='tcube'/></a>
<p className=' text-left'>One way to enable a business to create a unique identification for its products and provide visibility across the supply chain using advanced digital tracking system.

</p>
<Link to='/contact' className=' pt-20' >
          <button type="button" className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2  text-white  ">
            Know More  <BsArrowRight className=' ml-4 mt-1'/>
        </button></Link>
       </div>
       <div className=' flex flex-col gap-2 w-1/3'>
       <a href='' > <img className=' w-60 h-16' src={Onesg}alt='onrsg'/></a>
<p className=' text-left'>SaaS Platform built for construction companies, clients, architects and building suppliers to track all ESG assets to support UN sustainability net zero goals for 2050

</p>
<Link to='/contact' className=' pt-20'>
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
