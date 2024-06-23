"use client";
import React from "react";
import ServicesCards from "./ServicesCards";
import { IoCodeSlash } from "react-icons/io5";
import { HiOutlineDatabase } from "react-icons/hi";
import { CgBrowser } from "react-icons/cg";
import { IoIosColorPalette } from "react-icons/io";

const page = () => {
  return (
    <section id="services" className="custom-container">
      <div className="details">
        <h2 className="text-center pb-4 md:pb-12">Services</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
      <ServicesCards
        logo={<IoCodeSlash />}
        title="Web Development"
        description="Comprehensive web development services using MERN stack, Java, and PHP to build dynamic, scalable applications with robust backend and intuitive front-end interfaces."
      />
      <ServicesCards
        logo={<CgBrowser />}
        title="Frontend Development"
        description="Expert front-end development with HTML, CSS, JavaScript, Bootstrap, and Splide.js to create responsive, interactive, and visually appealing user interfaces."
      />
      <ServicesCards
        logo={<HiOutlineDatabase />}
        title="Backend Development"
        description="Efficient backend development utilizing Node.js, Express.js, MongoDB, and PHP to ensure secure, scalable, and high-performance server-side applications."
      />
      <ServicesCards
        logo={<IoIosColorPalette />}
        title="Web Designing"
        description="Professional web design using HTML, CSS, SCSS, SASS, and JavaScript to craft modern, user-friendly, and aesthetically pleasing websites and landing pages."
      />
      </div>
    </section>
  );
};

export default page;
