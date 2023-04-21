import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import ESG from './../../assets/ai.jpg';
import {
  BsArrowRight,
   
} from 'react-icons/bs'


const Section3 = () => {
  return (
  <>
  <div  className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 font-sans">
        

        <div className=" grid grid-flow-row sm:grid-flow-col pt-4  px-20 ">
        
        <div className=" flex flex-col gap-2  ">
          <h1 className=" font-bold text-5xl w-[75%]">
          Partner For A <span className=" text-[#17b1b1]">Frictionless Business</span>
          </h1>
          <p className=" text-lg w-[75%]">
          Our consulting service can help organizations unlock new business value through technology, we can help you deliver products and services to market faster, at lower risk.
           </p>
          <p className=" text-lg w-[75%]">
          We believe digital transformation consulting is socio-technical in nature, rather than just a technology implementation.
          </p>
          <p className=" text-lg w-[75%]">
          Improving the customer experience, whether that customer is external to the organization or an internal user, should be the ultimate focus of a consulting strategy. We formulate a well-defined business objective and determine, the best option for achieving it. Design, build and deploy an application that fits your business objectives
          </p>
          <button type="button" className="bg-[#17b1b1] w-60 gap-4 justify-between flex border-[#17b1b1] p-2 text-white"  >
              Talk To Our Experts  <BsArrowRight className=' m-1 text-white'/>
          </button>    
              </div>
              <div className="">
          <img className=" pt-8" src={ESG} alt="img" />
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Section3
