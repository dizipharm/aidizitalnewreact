import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import Footer from "../Landing Page/Footer";

const Aboutus = () => {
  return (
    <div name="features" className="w-full h-screen bg-white flex flex-col ">
      <div className=" m-32 text-5xl  font-bold text-center ">
        <h1>About Us</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-8  ">
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <p className="text-lg pt-2 pb-4">
              We challenge ourselves to simply the complexity and deliver the
              best possible solution to your pain problems with a value
              differentiation, we can help power your Success.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <p className="text-lg pt-2 pb-4">
              We intend to provide an end to end range of Information Technology
              Services and Solutions in Supply Chain, Regulatory, Compliance,
              Quality and Sustainable needs .
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <p className="text-lg pt-2 pb-4">
              What we bring to the table are the capabilities of Industry Domain
              Leaders and Information Technology Experts who worked for fortune
              100 companies with a long track record of delivering several
              mission critical Informational Technology projects seamlessly
              around the globe and worked closely with C level Executive
              Business Leaders .
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <p className="text-lg pt-2 pb-4">
              We believe our combined experience in Life Sciences –
              Pharmaceutical Domain and abreast with latest IT technologies , we
              can work towards strengthening and enabling your organization
              business roadmap deliver the business value at velocity and
              reasonable cost to all stakeholders.
            </p>
          </div>
        </div>
      </div>
      <div className=" m-8 text-2xl    ">
        <h3 className=" font-bold ">Our Focus:</h3>
        <div className=" flex flex-col">
          <p className="text-lg pt-2 pb-4">
            Bring together specialists from Life Sciences and Sustainability
            Domains and Technologists who can understand your needs:
          </p>
          <ul className=" flex flex-col text-lg  font-semibold -mt-3 ">
            <div className=" flex">
              <AiOutlineCheck className="w-7 mt-5 ml-2  text-green-600" />{" "}
              <li>End to End</li>
            </div>
            <div className=" flex">
             
              <AiOutlineCheck className="w-7 mt-5 ml-2 text-green-600" />{" "}
              <li> Translate into Requirements</li>
            </div>
            <div className=" flex">
              
              <AiOutlineCheck className="w-7 mt-5 ml-2 text-green-600" />{" "}
              <li>Lay a Roadmap for Alignment</li>
            </div>
            <div className=" flex">
              
              <AiOutlineCheck className="w-7 mt-5 ml-2 text-green-600" />
              <li>
                Be Agile to deliver the functionalities at reasonable cost with
                less friction and create a value to the business at velocity .
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className=" text-xl text-center mt-4 font-bold">
        <h3>Partnering to power and enable all around Success!</h3>
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutus;
