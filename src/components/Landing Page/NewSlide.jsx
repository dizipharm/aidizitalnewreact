import React from "react";

import { BiLeaf } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";

import { RiPlantLine, RiLightbulbFlashFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NewSlide = () => {
  return (
    <div className="w-full text-white bg-[green] ">
      <div className="w-full h-[800px] bg-[#F9AA33] absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px]  mx-auto py-8">
        <div className="text-center py-8 mt-4   text-slate-300">
          <h2 className="text-xl uppercase text-black font-bold">
            Our Approach
          </h2>
        </div>

        <div className="grid md:grid-cols-4">
          <div className="bg-[white] text-[black] m-4 p-8 text-center rounded-xl shadow-2xl relative">
          <div className=" flex flex-col  text-center gap-2">
           <RiPlantLine className='w-12 h-8 ml-20 text-green-600' />
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
            Agroecology
            </span>

           </div>
            <div className="text-md">
              <p className="flex py-4">
               
                Rainfed areas are diverse, fragile, ecologically stressed and vulnerable to climate variability.
                 Agro-ecological approaches enhance resilience and system productivity; 
                together with enhancing local economic capacity, it can bring prosperity to rainfed farmers and farm workers
              </p>
             
             
             
            </div>
          </div>
          <div className="bg-[white] text-[black] m-4 p-8 text-center rounded-xl shadow-2xl relative">
           
           <div className=" flex flex-col  text-center gap-2">
           <BiLeaf className='w-12 h-8 ml-20 text-green-600' />
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
            Biodiversity
            </span>

           </div>
            
            <div className="text-md">
              <p className="flex py-4">
              Rainfed areas harbour rich biodiversity (both agricultural and livestock,) 
              conserved and evolved over time for risk mitigation and local adaptation. Apart from supporting conservation and celebrating biodiversity with communities that protected it, we work towards evolving
               mainstream development approaches that strengthen conservation and use of biodiversity.
              </p>
            
             
            </div>
          </div>
          <div className="bg-[white] text-[black] m-4 p-8 rounded-xl text-center  shadow-2xl relative">
          <div className=" flex flex-col  text-center gap-2">
           <RiLightbulbFlashFill className='w-12 h-8 ml-20 text-green-600' />
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
            Innovation
            </span>

           </div>
          
          
            <div className="text-md">
              <p className="flex py-4">
              Diversity demands grassroots innovations specific to the locations. 
              We believe that enhancing the ‘innovation capacity’ of local communities is a way to find appropriate solutions to their problems. 
              We work to bring innovations in technology, processes and institutions, irrespective of their source, closer to communities.
              </p>
             
            </div>
          </div>
          <div className="bg-[white] text-[black] m-4 p-8 text-center rounded-xl shadow-2xl relative">
          <div className=" flex flex-col  text-center gap-2">
           <FaNetworkWired className='w-12 h-8 ml-20 text-green-600' />
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
            Networking
            </span>

           </div>
           
            <div className="text-md">
              <p className="flex py-4">
              Solutions to complex and diverse problems need to be co-created. 
              Networking as an approach to co-creation of solutions or policy is one of our core values. We work and network with grass-roots organisations, researchers, governments and others to exchange 
              knowledge and to enable a creative policy discourse for rainfed areas development.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide;
