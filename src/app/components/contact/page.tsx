"use client"
import React,{useState} from "react";
import axios from "axios"

const page = () => {

  const [FormData,setFormData]=useState();

  const sendMail=()=>{
    const response=axios.post("api/sendmail",)
  }
  const handleChange=()=>{

  }
  return (
    <section className="custom-container" id="contact">
      <div className="details">
        <h2 className="text-center pb-4 md:pb-12">
          Contact <span className="auto-type">Me.</span>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full md:w-3/4 xl:w-1/2">
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="text"
              name="name"
              placeholder="Full Name"
              id="name"
              onChange={()=>handleChange()}
            />
          </div>
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="email"
              name="email"
              placeholder="Email Address"
              id="email"
              onChange={()=>handleChange()}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full md:w-3/4 xl:w-1/2">
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="text"
              name="number"
              placeholder="Mobile Number"
              id="mobile"
              onChange={()=>handleChange()}
            />
          </div>
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="text"
              name="email-subject"
              placeholder="Email Subject"
              id="email-sub"
              onChange={()=>handleChange()}
            />
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full md:w-3/4 xl:w-1/2">
          <div className="input-div p-4 w-full">
            <textarea
              className="p-4 w-full rounded-xl"
              name="number"
              rows={8}
              placeholder="Your Message"
              id="email-message"
              onChange={()=>handleChange()}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-1/2">
          <button className="custom-btn">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default page;
