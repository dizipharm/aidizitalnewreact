import React, { useState, useEffect } from "react";
import "./../Css/custom.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePrinter,
  AiOutlineBarcode,
} from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TiBatteryFull } from "react-icons/ti";
import { MdQrCodeScanner } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { TfiFacebook } from "react-icons/tfi";

import { GrMedium } from "react-icons/gr";
import Footer from "./../Landing Page/Footer";

const Contactus = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [attachment, setAttachment] = useState(null);

  // const handleAttachmentChange = (event) => {
  //   const file = event.target.files[0];
  //   setAttachment(file);
  // };
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      // Submit form data to backend API
      const data = { name, email, phone, message,lastname,experience,position,subject };
      
     
      const response = await fetch(
        "https://fygemvi5g4.execute-api.us-east-1.amazonaws.com/Aidizitalcf/contactform",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response) {
        alert("Message sent successfully!");
        // Clear form input fields and reload captcha
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setLastname("");
        setExperience("");
        setPosition("");
        setSubject("");
        loadCaptchaEnginge(6);
      } else {
        alert(
          "There was an error sending the message. Please try again later."
        );
        // Reload captcha
        loadCaptchaEnginge(6);
      }
    } else {
      alert("Captcha does not match. Please try again.");
      // Reload captcha
      loadCaptchaEnginge(6);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white  pt-32 md:px-8  flex flex-col gap-8">
      <div>
        <h2 className=" text-3xl md:text-5xl font-bold md:p-8">
          We love to <span className=" text-[#17b1b1]">connect with you</span>
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row  md:pl-12 gap-4">
        <div className=" md:w-1/2 pl-20  bg-gray-100 rounded-sm">
          <div>
            <form
              onSubmit={handleSubmit}
              className="contact_form "
              
            >
              <div className="form-group flex flex-col font-sans gap-4">
                <div className=" form-group flex flex-col gap-4">
                  <label className=" text-xl  ">First Name</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                   
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="form-group  flex flex-col gap-4">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                  
                    value={lastname}
                    onChange={handleLastnameChange}
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control w-2/3"
                 
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>What Position You Are Applying For?</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                  
                    value={position}
                    onChange={handlePositionChange}
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Experience</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                 
                    value={experience}
                    onChange={handleExperienceChange}
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                  
                    value={phone}
                    onChange={handlePhoneNumberChange}
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Description</label>
                  <textarea
                    className="form-control w-2/3"
                  
                    value={message}
                    onChange={handleMessageChange}
                    required
                    
                  />
                </div>
                {/* <div className="form-group flex flex-col gap-4">
                  <label>Add Attachment:</label>
                  <input type="file" onChange={handleAttachmentChange} />
                </div> */}
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
                <div className="flex flex-col mt-2">
                  <LoadCanvasTemplate />
                </div>
                <div className="flex flex-col mt-2">
                <input
    type="text"
    id="user_captcha_input" // Add an id attribute here
    required
    className="form-control w-2/3"
    placeholder="Enter Captcha Value"
  />
                </div>
                <button
                  type="submit"
                
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
                  {/* <p>Phone : +44 00000</p> */}
                  <ul className="hidden md:flex text-black text-center justify-center ">
                    <li>
                      <GrMedium />
                    </li>
                    <li>
                      <TfiFacebook />
                    </li>
                    <li>
                      <FaLinkedinIn />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
