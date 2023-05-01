import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Apr1 from "./../../assets/strategy.png";
import Apr2 from "./../../assets/dev.png";
import Apr3 from "./../../assets/business-value.png";
import Apr4 from "./../../assets/tech-design.png";




const Ourapproach = () => {
  return (
    <div className="w-full  bg-gray-100 flex flex-col justify-between ">
      <section className=" ">
        <div className=" ">
          <div className=" grid grid-flow-row sm:grid-flow-col  gap-4 justify-center px-20 mt-8 ">
            <div>
              <h2 className=" text-5xl font-bold col-span-3">Our Approach</h2>
            </div>
            <div className=" flex flex-col gap-4">
              <h3 className="text-3xl col-span-9">
                Outcome-driven deep Tech Solutions in AI & Blockchain
              </h3>
              <p>
                We use state of the art design-based principles that enable
                business transformation at all levels and ecosystems.
              </p>
              <div className=" grid grid-flow-row grid-rows-2 sm:grid-flow-col  col-span-9 gap-8">
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr1} alt="apr1" />
                <div className=" w-40 flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Strategy matters</h1>
                  <p>
                    Our team conducts Indepth SWOT of your potential use cases &
                    utilization. We advice and strategies how the AI &
                    blockchain can transform your digital journey into future.
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr3} alt="apr3" />
                <div className=" w-40 flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Business value</h1>
                  <p>
                  We help you monitize into the future for better customer delight, revenue growth, business and operational efficiency. Our approach creates value across all the stakeholders.
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr4} alt="apr4" />
                <div className=" w-40 flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Technology design</h1>
                  <p>
                  Our 65+ years of tech design expertise, know how in deep tech and strategy experience helps in creating new age digital products and services with total privacy, trust and security
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <img className=" h-28 w-20 " src={Apr2} alt="apr2" />
                <div className=" w-40 flex flex-col gap-4">
                  <h1 className=" text-xl font-semibold">Dev + Go Live!</h1>
                  <p>
                  UI/UX, POC, Beta, MVP, Go Live Development, our experienced team can help you choose right technology framework and take your product journey for creating a new success story.
                  </p>
                </div>
              </div>
            </div>
            <button type="button" className="bg-[#17b1b1] gap-4 w-60 flex border-[#17b1b1] p-2 text-white"  >
             Connect with our experts <BsArrowRight className=' m-1 text-white'/>
          </button>     </div>
          </div>
       
        </div>
      </section>
    </div>
  );
};

export default Ourapproach;
