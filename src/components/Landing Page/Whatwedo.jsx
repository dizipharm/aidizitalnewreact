import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import ESG from "./../../assets/block.mp4";
import { BsArrowRight, BsDot } from "react-icons/bs";
import My1 from "../../assets/smart-contracts.png";
import My2 from "../../assets/develop.jpg";
import My3 from "../../assets/center.jpg";


const Whatwedo = () => {
  return (
    <div name='expertise' className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-4xl font-bold text-center p-1 sm:py-8 md:px-12 pt-40">
         Our Expertise
        </h2>

        <div className=" grid grid-flow-row grid-rows-3 sm:grid-flow-col pt-4 gap-12 justify-center ">
          <div className=" border-t border-gray-500">
            <h2 className=" pt-2 font-bold text-2xl text-center text-gray-400">
              Smart Contracts
            </h2>
            <div className=" flex gap-8 ">
              <div>
                <img className=" h-40 pt-8" src={My1} alt="my1" />
              </div>
              <div className=" pt-8 pl-8">
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Digital Smart Contract Architecture
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Smart Contract Design and Development
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Smart Contracts Optimization
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Smart Contract for Digital Wallets
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Ethereum & Hyperledger Smart Contract Development
                </p>
              </div>
            </div>
          </div>
          <div className=" border-t border-gray-500">
            <h2 className=" pt-2 font-bold text-2xl text-left text-gray-400">
            Developer tools, Integrations & Cloud Automation
            </h2>
            <div className=" flex gap-8 ">
             
              <div className=" pt-8 pl-8">
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  SDKs, APIs, Bots, Web/mobile app components
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Protocols/platform starters projects
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Apps integration
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  One-click-deploy tools
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Network monitoring, Performance testing and <br/>benchmarking
                </p>
              </div>
              <div>
                <img className=" h-40 pt-8" src={My2} alt="my1" />
              </div>
            </div>
          </div>
          <div className=" border-t border-gray-500 border-b ">
            <h2 className=" pt-2 font-bold text-2xl text-right text-gray-400">
             Decentralized applications
            </h2>
            <div className=" flex gap-8 ">
              <div>
                <img className=" h-40 pt-8" src={My3} alt="my1" />
              </div>
              <div className=" pt-8 pl-8">
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Complete App development life cycle, from ideation, <br/> prototyping, MVP to deployment and maintenance.
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  UX/UI design and implementation
                </p>
                <p className=" flex">
                  <BsDot className=" text-3xl text-[#17b1b1]" />
                  Web/Mobile, Token Generation
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
