import React from 'react'
import Logo from "../../assets/ai-dizital-logo.png"; 
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
    FaLinkedinIn
} from 'react-icons/fa'
import { TfiFacebook } from "react-icons/tfi";
import { GrMedium } from "react-icons/gr";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-white text-black py-y px-2 '>
       <footer className="footer p-10 bg-white text-base-content">
  <div>
    <span className="footer-title"><img className=' h-10 pl-2' src={Logo} alt='logo' /></span> 
    <p className="">Blockchain & AI solutions for<br/> Future Digital Transformation, we<br/> are Helping startups, 
    SME's apply<br/> deep technology to drive your <br />transformation into the future.</p> 
   {/* <div className=' text-lg flex gap-4 pt-4'>
     <GrMedium/>
     <TfiFacebook/>
     <FaLinkedinIn/>
     <FaTwitter/>
   </div> */}
    {/* <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a> */}
  </div> 
  <div className='  text-black'>
    <span className="footer-title text-gray-800">Industries</span> 
    <a className="link link-hover">Supply Chain</a> 
    <a className="link link-hover">Automobile</a> 
    <a className="link link-hover">Fairtrade & Luxury</a> 
    <a className="link link-hover">Goods</a>
    <a className="link link-hover">Art & Fashion</a>
    <a className="link link-hover">Aerospace</a>
    <a className="link link-hover">Agri, Food Industries</a>
  </div> 
  <div className='  text-black'>
    <span className="footer-title text-gray-800">What We Do</span> 
    <a className="link link-hover">Strategy</a> 
    <a className="link link-hover">Prototyping</a> 
    <a className="link link-hover"> Solution design</a>
    <a className="link link-hover">Ideation</a> 
    <a className="link link-hover">PoC</a> 
    <a className="link link-hover">Development</a> 

  </div> 
  <div className='  text-black'>
    <span className="footer-title text-gray-800"> &nbsp;</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Team</a> 
    <a className="link link-hover">Contact Us</a>
  </div>
   <div className='  text-black'>
    <span className="footer-title text-gray-800">Find Us</span> 
    <p className="link link-hover font-bold">UK</p> 
    <p className="link link-hover">01753701021</p> 
    <p className="link link-hover">268 Bath Road, Slough,</p> 
    <p className="link link-hover">London, SL14DX</p>
    <p className="link link-hover"></p>
    <p className="link link-hover font-bold">North America</p>
    <p className="link link-hover">Hollenbeck Avenue, Sunnyvale,</p>
    <p className="link link-hover">California 94087</p>
    <p className="link link-hover font-bold">India</p>
    <p className="link link-hover"> Telangana</p>
    <p className="link link-hover">Kushaiguda, 500062</p>

  </div>
  
</footer> 
<footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
  <div className="items-center grid-flow-col ">
    <p className=' border-r border-gray-400 pr-2'>Legal terms</p>
    <p>Privacy Policy</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <p>&copy; 2022 AI Dizital Solutions LTD. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer