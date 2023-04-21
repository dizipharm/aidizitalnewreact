import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Apr1 from "./../../assets/ideation.png";
import Apr2 from "./../../assets/development.png";
import Apr3 from "./../../assets/assesment.png";
import Apr4 from "./../../assets/poc.png";

const Section2 = () => {
  return (
   <div className=" w-full px-12 pt-8 ">
    <div className=" flex  gap-3">
    <div className=" w-4/12">
        <h1 className=" text-4xl font-bold text-center  pt-60">
        Our Blockchain Consulting Process
        </h1>
    </div>
    <div className=" w-8/12">
    <div className=" grid grid-cols-2  gap-8 font-sans">
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr1} alt="apr1" />
                <div className=" w-full flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Ideation</h1>
                  <p>
                  We discuss the feasibility of your blockchain project with our experts and define the workflows and business outcomes/goals .
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr3} alt="apr3" />
                <div className=" w-full flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Assessment</h1>
                  <p>
                  Our Blockchain Assessment Framework helps us analyze your existing solution and discover. We identify best-fit blockchain financially viable use case(s) and define operational model.
                   </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr4} alt="apr4" />
                <div className=" w-full flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">PoC</h1>
                  <p>
                  Our Blockchain POC process, framework and prototype, helps in identifying the use cases or a project idea which can be feasible in a real-world situation — a common type of consensus algorithm for blockchain.
                   </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr2} alt="apr2" />
                <div className=" w-full flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Development</h1>
                  <p>
                  Once you are ready to start blockchain technology development, we help you build the blockchain product, from UI/UX to full front-end and back-end implementation.
                   </p>
                </div>
              </div>
            </div>
    </div>
    </div>

   </div>
  );
};

export default Section2;
