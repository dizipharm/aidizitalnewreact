import React, { useState } from "react";
import {  animateScroll as scroll } from "react-scroll";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePrinter,
  AiOutlineBarcode
} from "react-icons/ai";
import {FaLinkedinIn, FaTwitter} from "react-icons/fa"
import { TiBatteryFull } from "react-icons/ti";
import { MdQrCodeScanner } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import { TfiFacebook } from "react-icons/tfi";

import { GrMedium } from "react-icons/gr";

import Logo from "../../assets/ai-dizital-logo.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function toggleDropdown2() {
    setIsDropdownOpen2(!isDropdownOpen2);
  }

  const menuItems = [
    {
      id: 1,
      label: "Consultancy",
      sublabel: "The Comlete solution for running your operations",
      icon: <MdQrCodeScanner />,
      link: "/accessories",

    },
    {
      id: 2,
      label: "Innovation & Prototyping",
      sublabel: "Smart accessories for your Smart Scanner",
      icon: <TiBatteryFull />,
      link: "/accessories",

    },
   
  ];

  const solutionItems = [
    {
      id: 1,
      label: "Tracepharm",
      sublabel: "The Comlete solution for running your operations",
      icon: <MdQrCodeScanner />,
      link: "/tracepharm",

    },
    {
      id: 2,
      label: "Serialization & Aggregation",
      sublabel: "Smart accessories for your Smart Scanner",
      icon: <TiBatteryFull />,
      link: "https://www.tcubeai.com/",

    },
   
  ];

  const softwareItems = [
    {
      id: 1,
      label: " Supply Chain",
      sublabel: "The Comlete solution for running your operations",
      icon: <MdQrCodeScanner />,
      link: "/tracepharm",

    },
    {
      id: 2,
      label: "Sustainability",
      sublabel: "Smart accessories for your Smart Scanner",
      icon: <AiOutlineBarcode />,
      link: "/sustainability",

    },
    {
      id: 3,
      label: "NFT marketplaces",
      sublabel: "Barcode label printers from inFlow",
      icon: <AiOutlinePrinter />,
      link: "/nftmarket",

    },
    {
      id: 4,
      label: "Art & Fairtrade",
      sublabel: "Barcode label printers from inFlow",
      icon: <AiOutlinePrinter />,
      link: "/trade",

    },
   
  ];

  const companyItems = [
    {
      id: 1,
      label: " About AiDiZital",
      sublabel: "The Comlete solution for running your operations",
      icon: <MdQrCodeScanner />,
      link: "/allfeatures",

    },
    {
      id: 2,
      label: "Team",
      sublabel: "Smart accessories for your Smart Scanner",
      icon: <AiOutlineBarcode />,
      link: "/allfeatures",

    },
    {
      id: 3,
      label: "Careers",
      sublabel: "Barcode label printers from inFlow",
      icon: <AiOutlinePrinter />,
      link: "/allfeatures",

    },
    {
      id: 4,
      label: "Contact Us",
      sublabel: "Barcode label printers from inFlow",
      icon: <AiOutlinePrinter />,
      link: "/contact",

    },
   
  ];

  return (
    <div className="w-screen h-[120px] z-10 bg-[white]  fixed drop-shadow-lg ">
     
     <div className="flex flex-col divide-x-2 ">
     <div className="px-2 flex justify-between items-center w-full h-full ">
         <div className="flex items-center">
          <Link to='/'><img className=" h-10 pl-2 " src={Logo} alt="/logo" /></Link>
          {/* <h1 className=" lg:text-3xl sm:text-2xl font-bold"> Millets </h1> */}
        </div>
        <div className=" flex gap-4">
          <ul className="hidden md:flex text-black ">
          <li><GrMedium/></li>
          <li><TfiFacebook/></li>
          <li><FaLinkedinIn /></li>
          <li><FaTwitter /></li>
          </ul>
        </div>
        
        </div>
     <div className="px-6 flex n items-center w-full h-full border-t border-gray-300">
        <div className="flex items-center">
          {/* <Link to='/'><img className=" h-8 " src={Logo} alt="/logo" /></Link> */}
          <h1 className=" lg:text-xl font-semibold font-serif mt-4 "> AiDiZital </h1>
        </div>
        <div className=" mr-12">
          <ul className="hidden md:flex text-black">
              
            <li className="dropdown dropdown-hover " >
              <label className=" flex">
                Solutions <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              <div
               tabIndex={0} className="dropdown-content menu grid grid-cols-1  shadow bg-white mt-4 rounded-box w-52"
              >
                {solutionItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-4 py-4 hover:bg-[#17b1b1] hover:text-black "
                  >
                    <div className=" flex gap-1">
                      <div className="text-2xl"></div>
                      {item.label}
                    </div>
                 
                  </a>
                ))}
              </div>
            </li>
           
            <li className="dropdown dropdown-hover " >
              <label className=" flex">
                Services <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              <div
                tabIndex={0} className="dropdown-content menu  shadow bg-white mt-4 rounded-box w-52" >
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block  px-4 py-4 hover:bg-[#17b1b1] hover:text-black "
                  >
                    <div className=" flex gap-1">
                      {/* <div className="text-2xl">{item.icon}</div> */}
                      {item.label}
                    </div>
                   
                  </a>
                ))}
              </div>
            </li>
            <li className="dropdown dropdown-hover " >
              <label className=" flex">
                Case Studies <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              <div
                tabIndex={0} className="dropdown-content menu  shadow bg-white mt-4 rounded-box w-52" >
                {softwareItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block  px-4 py-4 hover:bg-[#17b1b1] hover:text-black "
                  >
                    <div className=" flex gap-1">
                      {/* <div className="text-2xl">{item.icon}</div> */}
                      {item.label}
                    </div>
                   
                  </a>
                ))}
              </div>
            </li>
            <li className="dropdown dropdown-hover " >
              <label className=" flex">
                Case Studies <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              <div
                tabIndex={0} className="dropdown-content menu  shadow bg-white mt-4 rounded-box w-52" >
                {companyItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block  px-4 py-4 hover:bg-[#17b1b1] hover:text-black "
                  >
                    <div className=" flex gap-1">
                      {/* <div className="text-2xl">{item.icon}</div> */}
                      {item.label}
                    </div>
                   
                  </a>
                ))}
              </div>
            </li>
            {/* <Link to='/contact'>
              <button className='  w-40 h-10  mt-2 hover:text-white hover:bg-[#f9aa33]    bg-[#e3e8ea] font-semibold text-[#f9aa33] '>Get Started</button>      
            </Link> */}
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5 text-white" />
          ) : (
            <AiOutlineClose className="w-5 text-white" />
          )}
        </div>
      </div>

     </div>
      

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 "}>
        <li className="border-b-2 border-zinc-300 w-full hover:bg-[#17b1b1] hover:text-white">
          <Link onClick={handleClose} to="/" >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:bg-[#17b1b1] hover:text-white">
          <Link
            onClick={handleClose}
            to="/accessories"
            
          >
            Hardware
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:bg-[#f9aa33] hover:text-white">
          <Link
            onClick={handleClose}
            to="/allfeatures"
            
          >
            Software
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:bg-[#f9aa33] hover:text-white">
          <Link
            onClick={handleClose}
            to="/about"
           
          >
            About Us
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:bg-[#f9aa33] hover:text-white">
          <Link
            onClick={handleClose}
            to="/pricing"
           
          >
            Pricing
          </Link>
        </li>
        <li  className="border-b-2 border-zinc-300 w-full hover:bg-[#f9aa33] hover:text-white">
        <Link
         onClick={handleClose}
         to='/contact'>
        
              <button className='  w-40 h-10  mt-2 hover:text-white hover:bg-[#f9aa33]    bg-[#e3e8ea] font-semibold text-[#f9aa33] '>Get Started</button>      
            </Link>
        </li>
        
      </ul>
    </div>
  );
};
export default Navbar;
