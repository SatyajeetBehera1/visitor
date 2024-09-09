'use client'
import React from "react";
import Image from "next/image";
import bggrid from "../../../assets/bggrid.png";
import Timeline from "./Timeline";
import MobileView from "./MobileView";
import { useMediaQuery } from "@react-hook/media-query";

export default function OfferingMain() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="relative min-h-[100vh]">
      {/* Use Next.js Image component for optimized image loading */}
      <Image
        src={bggrid}
        alt="Background Grid"
        className="absolute top-0 left-0 w-full h-[100vh] md:h-[110%]"
      />
      
      <div className="relative w-full flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#3D255D]">
          OUR OFFERING
        </h1>
        <div className="w-full">
          {isMobile ? <MobileView /> : <Timeline />}
        </div>
      </div>
    </div>
  );
}
