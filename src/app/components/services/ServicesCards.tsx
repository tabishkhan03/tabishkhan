"use client";
import React from "react";

const servicesCards = ({ logo, title, description }: any) => {
  return (
    <div className="service-card flex flex-col justify-center items-center col-span-4 lg:col-span-2 2xl:col-span-1">
      <figure className="service-logo">{logo}</figure>
      <p className="service-title text-2xl md:text-3xl py-4">{title}</p>
      <p className="service-title text-base sm:text-lg md:text-xl text-center text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default servicesCards;
