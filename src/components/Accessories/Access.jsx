import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import Footer from "../Landing Page/Footer";

const Access = () => {
  return (
    <div
      name="features"
      className="w-full h-screen bg-white flex flex-col "
    >
      <div className=" m-32 text-5xl  font-bold text-center ">
        <h1>Hardware</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4  ">
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Printers</h3>
            <p className="text-lg pt-2 pb-4">
              We Partnered with Reputed Barcode Printer Manufactures to Integrate Our Software by Simplifying the Setup to Quality of Printing.
              We can Work with you in getting in out of box solution for your Manufacturing Needs.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Smart Scanners</h3>
            <p className="text-lg pt-2 pb-4">
              We have Developed Android Based Devices with Buildin Softwares for Scanning with Efficiency and Connecting to Cloud for Real Time Update with Scan Data.
              We also Developed Android Based Scanning Applications, Which can be Downloaded on Your  Existing Android Devices.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Other Accessories </h3>
            <p className="text-lg pt-2 pb-4">
            We Provide a pack of 40 Sheets Multi-Purpose Self Adhesive Labels, Which can be used in the exixsting Laser-Z 300 DPI printers
            </p>
          </div>
        </div>
      
        
       
       
       
      </div>
      <Footer/>
    </div>
  );
};

export default Access;
