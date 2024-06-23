import React from "react";

const AboutCard = ({ duration, designation, place }: any) => {
  return (
    <div className="about-card w-full sm:w-1/2 max-w-sm" >
      <p className="about-duration pb-2 text-base md:text-xl ">{duration}</p>
      <p className="about-designation text-2xl md:text-3xl pb-4 ">{designation}</p>
      <p className="about-place text-base md:text-xl "> {place}</p>
    </div>
  );
};

export default AboutCard;
