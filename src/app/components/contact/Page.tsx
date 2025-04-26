import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    emailsub: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const sendMail = async () => {
    try {
      const response = await axios.post("/api/sendmail", formData);
      if (response.data.success == true) {
        toast.success("Email sent successfully !");
      } else {
        toast.error(`${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="custom-container" id="contact">
      <ToastContainer />
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
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="email"
              name="email"
              placeholder="Email Address"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full md:w-3/4 xl:w-1/2">
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="number"
              name="phonenumber"
              placeholder="Mobile Number"
              id="mobile"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div className="input-div p-4 w-full lg:w-1/2">
            <input
              className="p-4 w-full rounded-xl"
              type="text"
              name="emailsub"
              placeholder="Email Subject"
              id="email-subject"
              value={formData.emailsub}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full md:w-3/4 xl:w-1/2">
          <div className="input-div p-4 w-full">
            <textarea
              className="p-4 w-full rounded-xl"
              name="message"
              rows={8}
              placeholder="Your Message"
              id="email-message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-1/2">
          <button className="custom-btn" onClick={sendMail}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
