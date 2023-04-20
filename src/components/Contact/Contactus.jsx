import React, { useState,useRef } from "react";
import Footer from "../Landing Page/Footer";

async function sendForm(name, email, message, phone) {
  await fetch(
    "https://6626k570r0.execute-api.us-east-1.amazonaws.com/prod/sendemail",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        phone,
      }),
    }
  )
  alert("email sent!")
     // Handle successful submission
     window.location.reload(); // Refresh the page
}

function Contactus () {
  const name = useRef(null)
  const email = useRef(null)
  const message = useRef(null)
 const phone = useRef(null)
  

  return (
  
    <><div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0 ">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden pt-28">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Contact Us
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
              Please share your details, we'll reach you.
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  TCUBEAI Technologies Private Limited
                  Kushaiguda,500062.
                </div>
              </div>

              {/* <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div> */}

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                 hrglobal@aidizital.com
                </div>
              </div>
            </div>

            <form className="p-6 flex flex-col justify-center"  onSubmit={(e) => {
          e.preventDefault()
          sendForm(
            name.current.value,
            email.current.value,
            message.current.value,
            phone.current.value
          )
        }}>
              <div className="flex flex-col">
                <label  className="hidden">Full Name</label>
                <input type="name" name="name" ref={name} placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none " />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input type="email" name="email" ref={email} placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">Number</label>
                <input type="tel" name="phone" ref={phone} placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">Message</label>
                <textarea type="text" name="message" ref={message} placeholder="Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
              </div>

              <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
    <Footer />
    </>
 ) 
};

export default Contactus;
