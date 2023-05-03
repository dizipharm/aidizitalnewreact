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
  const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
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
      link: "/consultancy",

    },
    {
      id: 2,
      label: "Innovation & Prototyping",
      sublabel: "Smart accessories for your Smart Scanner",
      icon: <TiBatteryFull />,
      link: "/innovation",

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
      link: "/about",

    },
    {
      id: 2,
      label: "Team",
      sublabel: "Smart accessories for your Smart Scanner",
      icon: <AiOutlineBarcode />,
      link: "/team",

    },
    {
      id: 3,
      label: "Careers",
      sublabel: "Barcode label printers from inFlow",
      icon: <AiOutlinePrinter />,
      link: "/careers",

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
         <div className="flex items-center pt-2">
          <Link to='/'><img className=" h-9 pl-2 " src={Logo} alt="/logo" /></Link>
          {/* <h1 className=" lg:text-3xl sm:text-2xl font-bold"> Millets </h1> */}
        </div>
        <div className=" flex gap-4">
          <ul className="hidden md:flex text-black ">
          {/* <li><Link> <GrMedium/></Link></li>
          <li><TfiFacebook/></li>
          <li><FaLinkedinIn /></li>
          <li><FaTwitter /></li> */}
          </ul>
        </div>
        
        </div>
     <div className="px-6 flex n items-center w-full h-full border-t border-gray-300">
        <div className="flex items-center">
          {/* <Link to='/'><img className=" h-8 " src={Logo} alt="/logo" /></Link> */}
          <h1 className=" lg:text-xl font-semibold font-serif mt-4 hover:border-b-2 hover:border-b-[#17b1b1] hover:text-[#17b1b1]"> <Link to='/'>AiDiZital</Link> </h1>
        </div>
        <div className=" mr-12">
          <ul className="hidden md:flex text-black">
              
            <li className="dropdown dropdown-hover " >
              <label className=" flex hover:border-b-2 hover:border-b-[#17b1b1] hover:text-[#17b1b1]">
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
              <label className=" flex hover:border-b-2 hover:border-b-[#17b1b1] hover:text-[#17b1b1]">
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
              <label className=" flex hover:border-b-2 hover:border-b-[#17b1b1] hover:text-[#17b1b1]">
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
              <label className=" flex hover:border-b-2 hover:border-b-[#17b1b1] hover:text-[#17b1b1]">
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

        <div className="md:hidden ml-40 mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5 text-[#17b1b1]" />
          ) : (
            <AiOutlineClose className="w-5 text-[#17b1b1]" />
          )}
        </div>
      </div>

     </div>
      

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 "}>
      
      <li className="border-b-2 border-zinc-300 w-full ">
        <label className=" flex hover:border-b-2  " onClick={() =>setShow2(!show2)}>
                Solutions <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              {
                show2? <ul >
                <li className='border-b-2 border-zinc-300'><Link to='/tracepharm'>TracePharm</Link></li>
                <li > <Link to='https://www.tcubeai.com/'>Serialization</Link></li>
                </ul>:null
              }
        
        </li>
        <li className="border-b-2 border-zinc-300 w-full  ">
        <label className=" flex hover:border-b-2  " onClick={() =>setShow(!show)}>
                Services <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              {
                show? <ul >
                <li className='border-b-2 border-zinc-300'>Consultancy</li>
                <li >Innovation & Prototyping</li>
                </ul>:null
              }
        
        </li>
        <li className="border-b-2 border-zinc-300 w-full ">
        <label className=" flex  hover:text-[black]" onClick={() =>setShow1(!show1)}>
                Case Studies <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              {
                show1?<ul>
                <li className='border-b-2 border-zinc-300'><Link>Supply Chain</Link></li>
                <li className='border-b-2 border-zinc-300'><Link>Sustainability</Link></li>
                <li className='border-b-2 border-zinc-300 '><Link>NFT marketplaces</Link></li>
                <li className=''><Link>Art & Fairtrade</Link></li>
                </ul>:null
              }
         
        </li>
        <li className="border-b-2 border-zinc-300 w-full ">
        <label className=" flex hover:text-[black]" onClick={() =>setShow3(!show3)}>
                Company <RiArrowDropDownLine className=" mt-1 text-lg" />
              </label>
              {
                show3? <ul>
                <li className='border-b-2 border-zinc-300'><Link>About AiDizital</Link></li>
                <li className='border-b-2 border-zinc-300'><Link>Team</Link></li>
                <li className='border-b-2 border-zinc-300'><Link>Careers</Link></li>
                <li className=''><Link>Contact</Link></li>
       
                </ul>:null

              }
        
        </li>
       
       
        
      </ul>
    </div>
  );
};
export default Navbar;
