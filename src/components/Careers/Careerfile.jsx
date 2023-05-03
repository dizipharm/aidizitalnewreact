import React from "react";
import Img1 from "./../../assets/softwaredeveloper.webp";
import Img2 from "./../../assets/devops.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Careerfile = () => {
  return (
    <div className=" pt-8 text-center justify-center px-12 flex flex-col gap-8 ">
      <h1 className=" text-4xl font-bold ">Open Position In All Locations</h1>
      <div className=" flex flex-col gap-8">
      <div className=" flex flex-col md:flex-row gap-8 justify-center md:px-36 ">
          <img className=" md:w-2/3  h-60" src={Img1} alt="img1" />
          <div className=" flex flex-col text-left ">
            <h1 className=" font-bold text-2xl">Software Developer</h1>
            <div className=" flex flex-col  ">
              <p>
                {" "}
                <span className=" font-bold">Req Skills:</span> Golang, Python,
                React Js,Java
              </p>
              <p>
                <span className=" font-bold">Exp Req:</span> 3 Years
              </p>
              <p>
                <span className=" font-bold">Position:</span> Contract
              </p>
              <p>
                <span className=" font-bold">Location:</span> 268 Bath Road,
                Slough, London, SL1 4DX
              </p>
              <p>
                <span className=" font-bold">Description:</span> The role
                requires a technically competent individual with a sound
                technical and management experience in IT and especially in the
                programming such as Golang, Python, Java,React Js technologies.
              </p>

              <Link to="/contact">
                <button
                  type="button"
                  className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"
                >
                  Apply For This Job <BsArrowRight className=" ml-4 mt-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-8 justify-center md:px-36 ">
          <img className=" md:w-2/3  h-60" src={Img2} alt="img2" />
          <div className=" flex flex-col text-left ">
            <h1 className=" font-bold text-2xl">DevOps Developer</h1>
            <div className=" flex flex-col  ">
              <p>
                {" "}
                <span className=" font-bold">Req Skills:</span> GAWS CI/CD,Cloud ormation,Azure,Jenkins,Docker

              </p>
              <p>
                <span className=" font-bold">Exp Req:</span> 4 Years
              </p>
              <p>
                <span className=" font-bold">Position:</span> Contract
              </p>
              <p>
                <span className=" font-bold">Location:</span> 268 Bath Road,
                Slough, London, SL1 4DX
              </p>
              <p>
                <span className=" font-bold">Description:</span> The role
                requires a technically competent individual with a sound
                technical and management experience in IT and especially in the
                programming such as Golang, Python, Java,React Js technologies.
              </p>

              <Link to="/contact">
                <button
                  type="button"
                  className="bg-[#17b1b1] gap-4 flex border-[#17b1b1] p-2 text-white"
                >
                  Apply For This Job <BsArrowRight className=" ml-4 mt-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerfile;
