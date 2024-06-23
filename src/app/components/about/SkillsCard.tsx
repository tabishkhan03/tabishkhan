"use client";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

const SkillsCard = ({ icon, skillName }: any) => {
  return (
      <Tooltip title={skillName} placement="top">
    <div className="skill-card p-8 ">
        <p className="skill-icon pb-2 text-6xl ">{icon}</p>
    </div>
      </Tooltip>
  );
};

export default SkillsCard;
