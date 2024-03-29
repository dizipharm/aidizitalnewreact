import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import ESG from './../../assets/block.mp4';
import {
  BsArrowRight,
   
} from 'react-icons/bs'

const Enterprise = () => {
  return (
    <div  className="w-full my-32  ">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-4xl font-bold text-center p-1 sm:py-8 md:px-12 pt-40">Our Values <br></br> <br></br> Innovation <span></span>Trust <span></span>Transparency</h2>
        

        <div className=" grid grid-flow-row sm:grid-flow-col pt-4 gap-12 ">
        <div className="w-full">
          <video className=" " autoPlay muted loop>
            <source src={ESG} type="video/mp4" />
          </video>
        </div>
        <div className=" flex flex-col gap-4">
          <p className=" font-bold text-2xl">
          Creating the next wave of digital enterprise business - private, consortium
          </p>
          <p className=" text-lg">
          We help you in creating a powerful architectural technology with the potential to impact enterprise and B2B ecosystems as much as the internet and cloud.
          </p>
          <p className=" text-lg">
          Unlocking the value of blockchain beyond bitcoin and cryptocurrency.We help our customers create enterprise blockchain solutions from scratch, in creating a powerful architectural technology with the potential to impact enterprise and B2B ecosystems as much as the internet and cloud, as well as integrate enterprise IT ecosystems to external blockchains.
          </p>
          
          {/* <button type="button" className="bg-[#17b1b1] w-60 gap-4 justify-between flex border-[#17b1b1] p-2 text-white"  >
              Talk To Our Experts  <BsArrowRight className=' m-1 text-white'/>
          </button>     */}
              </div>
      </div>
      </div>
    </div>
  );
};

export default Enterprise;
