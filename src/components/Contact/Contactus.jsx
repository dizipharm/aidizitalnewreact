import React from "react";
import "./../Css/custom.css";
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
import Footer from './../Landing Page/Footer'

const Contactus = () => {
  return (
    <div className="w-full h-screen bg-white  pt-32 md:px-8  flex flex-col gap-8">
      <div>
        <h2 className=" text-3xl md:text-5xl font-bold md:p-8">
          We love to <span className=" text-[#17b1b1]">connect with you</span>
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row  md:pl-12 gap-4">
        <div className=" md:w-1/2 pl-20  bg-gray-100 rounded-sm">
          <div>
            <form
              method="POST"
              className="contact_form "
              action="sendEmail.php"
              encType="multipart/form-data"
            >
              <div className="form-group flex flex-col font-sans gap-4">
                <div className=" form-group flex flex-col gap-4">
                  <label className=" text-xl  ">First Name</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    name="firstname"
                    required
                  />
                </div>
                <div className="form-group  flex flex-col gap-4">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    name="lastname"
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control w-2/3"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>What Position You Are Applying For?</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    name="position"
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Experience</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    name="experience"
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    name="contact"
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    name="subject"
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Description</label>
                  <textarea
                    className="form-control w-2/3"
                    name="message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Add Attachment:</label>
                  <input type="file" name="attachment" />
                </div>
                <div className="form-group">
                  <p>
                    We are committed to protecting and respecting your privacy,
                    and we�ll only use your personal information to administer
                    your account and to provide the products and services you
                    requested from us.{" "}
                  </p>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        defaultValue
                      />
                      By clicking submit below, you consent to allow
                      AIDizital.com to store and process the personal
                      information submitted above to provide you with the
                      content requested.
                    </label>
                  </div>
                  <p>
                    You can unsubscribe from these communications at any time
                  </p>
                </div>
                <button
                  type="submit"
                  name="send"
                  className=" w-20 h-8 bg-[#17b1b1] border-[#17b1b1]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" md:w-1/2">
          <div className="col-md-5">
            <div className="contact_boxes">
              <div className="single-contact">
                <div className="cont_txt text-center">
                  <h4 className="ai-h4">Contact Us</h4>
                  <p>Email : hrglobal@aidizital.com</p>
                  <p>Phone : +44 00000</p>
                  <ul className="hidden md:flex text-black text-center justify-center ">
          <li><GrMedium/></li>
          <li><TfiFacebook/></li>
          <li><FaLinkedinIn /></li>
          <li><FaTwitter /></li>
          </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contactus;
