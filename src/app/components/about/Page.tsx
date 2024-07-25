"use client";
import React, { useState } from "react";
import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";
import { FaHtml5,FaCss3,FaReact,FaBootstrap,FaNodeJs,FaGitAlt,FaGithub,FaSass,FaWordpress} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill,RiTailwindCssFill,RiJavaFill  } from "react-icons/ri";
import { SiExpress,SiMongodb,SiVercel,SiPostman,SiPhp } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
const Page = () => {
  const [tab, setTab] = useState(0);
  return (
    <section id="about" className="custom-container">
      <div className="details">
        <h2 className="text-center pb-4 md:pb-12">
          About <span className="auto-type">Me.</span>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="tab-btn-div col-span-4 lg:col-span-1 ">
          <div className="w-full flex items-center justify-center">
            <button
              className="tab-btn mb-2 lg:mb-8 "
              onClick={() => {
                setTab(0);
              }}
            >
              Education
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              className="tab-btn mb-2 lg:mb-8 "
              onClick={() => {
                setTab(1);
              }}
            >
              Experience
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              className="tab-btn mb-2 lg:mb-8 "
              onClick={() => {
                setTab(2);
              }}
            >
              Skills
            </button>
          </div>
          {/* <div className="w-full flex items-center justify-center">
            <button
              className="tab-btn mb-2 lg:mb-8 "
              onClick={() => {
                setTab(3);
              }}
            >
              About Me
            </button>
          </div> */}
        </div>
        <div className="col-span-4 lg:col-span-3">
          {tab === 0 && (
            <div className="tab-btn-content ">
              <div className="details">
                <h3 className="center auto-type">Education</h3>
              </div>
              <div className="tab-content flex flex-wrap gap-4">
                <AboutCard duration="2018-2019" designation="Secondary Education" place="S.S High School" />
                <AboutCard duration="2019-2021" designation="Higher Secondary Education" place="S.S Junior College " />
                <AboutCard duration="2021-2024" designation="Bachelor of Computer Application" place="Sahyog College of IT" />
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="tab-btn-content ">
              <div className="details">
                <h3 className="center auto-type">Experience</h3>
              </div>
              <div className="tab-content flex flex-wrap gap-4">
                <AboutCard duration="Sep 2022 - Dec 2022 " type="internship" designation="Frontend Developer" place="Ideamgaix" />
                <AboutCard duration="Aug 2023 - Nov 2023" type="internship" designation="Fullstack Developer" place="TCR Innovations " />
                <AboutCard duration="Feb 2024 - Apr 2024" type="Freelance" designation="Web Developer" place="Digital-A-Marketing" />
                <AboutCard duration="Apr 2024 - Jun 2024" type="Freelance" designation="Web Developer" place="Modern Aura" />
                <AboutCard duration="Jul 2024 - Present" type="internship" designation="Web Developer" place="Genex Corporation" />
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="tab-btn-content ">
              <div className="details">
                <h3 className="center auto-type">Skills</h3>
              </div>
              <div className="tab-content flex flex-wrap gap-4 justify-center md:justify-start items-center">
                <SkillsCard icon={<FaHtml5/>} skillName="HTML" />
                <SkillsCard icon={<FaCss3/>} skillName="CSS" />
                <SkillsCard icon={<FaSass/>} skillName="SASS" />
                <SkillsCard icon={<BsFiletypeScss/>} skillName="SCSS" />
                <SkillsCard icon={<IoLogoJavascript/>} skillName="JS" />
                <SkillsCard icon={<RiTailwindCssFill/>} skillName="Tailwind" />
                <SkillsCard icon={<FaBootstrap/>} skillName="Bootstrap" />
                <SkillsCard icon={<FaReact/>} skillName="ReactJS" />
                <SkillsCard icon={<RiNextjsFill/>} skillName="NextJS" />
                <SkillsCard icon={<FaNodeJs/>} skillName="NodeJS" />
                <SkillsCard icon={<SiExpress/>} skillName="ExpressJS" />
                <SkillsCard icon={<SiMongodb/>} skillName="MongoDB" />
                <SkillsCard icon={<FaGitAlt/>} skillName="Git" />
                <SkillsCard icon={<FaGithub/>} skillName="Github" />
                <SkillsCard icon={<SiVercel/>} skillName="Vercel" />
                <SkillsCard icon={<SiPostman/>} skillName="Postman" />
                <SkillsCard icon={<SiPhp/>} skillName="Php" />
                <SkillsCard icon={<FaWordpress/>} skillName="Wordpress" />
                <SkillsCard icon={<TbBrandCpp/>} skillName="CPP" />
                <SkillsCard icon={<RiJavaFill/>} skillName="Java" />
              </div>
            </div>
          )}
          {/* {tab === 3 && (
            <div className="tab-btn-content ">
              <div className="details">
                <h3 className="center auto-type">Profile</h3>
              </div>
              About Me Content Here
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Page;
