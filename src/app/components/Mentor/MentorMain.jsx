import bggrid from "../../../assets/bggrid.png";
import React from 'react';
import Cards from './Cards';
import Image from "next/image"

export default function MentorMain() {
  return (
    <div className="relative h-full ">
      <div className="absolute inset-0">
        <Image
          src={bggrid}
          alt="Background Grid"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full h-full flex flex-col items-center">
        <h1 className="text-[250%] text-[#3D255D] font-bold mt-[5%] z-10">
          Our Mentors
        </h1>
        <div className="w-full h-full z-10">
          <Cards />
        </div>
      </div>
    </div>
  );
}
