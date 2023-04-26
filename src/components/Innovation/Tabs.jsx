import React from "react";
import Img1 from './../../assets/data-access.jpg'
import Img2 from './../../assets/data-security.jpg'
import Img3 from './../../assets/data-the-cloud.jpg'

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[#17b1b1] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Data Transformation
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-[#17b1b1] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Machine Learning and AI
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-[#17b1b1] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Data Visualisation
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" flex gap-4">
                    <img className=" w-1/2 h-[25%]" src={Img1}/>
                    <div className=" flex flex-col gap-2">
                        <h1 className=" text-2xl ">Data <span className=" text-[#17b1b1]">Transformation</span> </h1>
                        <p>With more than 20 years of experience in data discovery and transformation, we help you with a fastest and easiest way to extract data from difficult, semi-structured data, as well as from Big Data and other structured sources.

                        </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className=" flex gap-4">
                    <img className=" w-1/2 h-[25%]" src={Img2}/>
                    <div className=" flex flex-col gap-2">
                        <h1 className=" text-2xl ">Machine Learning  <span className=" text-[#17b1b1]">and AI</span> </h1>
                        <p>We deliver machine learning and AI solutions quickly get to the granular , delivering transparency Our flexible no-code approach doesn’t restrict how models are configured and tuned, giving you control over model building.

                        </p>
                    </div>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className=" flex gap-4">
                    <img className=" w-1/2 h-[25%]" src={Img3}/>
                    <div className=" flex flex-col gap-2">
                        <h1 className=" text-2xl ">Data  <span className=" text-[#17b1b1]">Visualization</span> </h1>
                        <p>We help you with building visualization tools that give you fast, fully informed decisions by crunching all sorts of siloed data points across your business.
                            
                        </p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="pink" />;
    </>
  );
}
