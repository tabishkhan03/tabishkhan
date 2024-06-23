import Image from "next/image";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

const ProjectCard = ({img,gitLink,liveLink}:any) => {
  return (
    <div className="proj-card col-span-3 lg:col-span-1 flex justify-center items-center">
        <Image className="w-full md:w-2/3 lg:w-full"  alt="project-img" src={img}/>
      <div className="proj-card-hover flex justify-evenly items-center">
        <div className="hover-code-icon">
            <Link href={gitLink} target="_blank" >
                <IoCodeSlash/>
            </Link>
        </div>
        <div className="hover-code-icon">
            <Link href={liveLink} target="_blank" >
                <IoEyeOutline/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
