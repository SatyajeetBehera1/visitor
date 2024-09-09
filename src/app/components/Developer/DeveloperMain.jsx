'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image"

import Roadmap from "../../../assets/Roadmap.png";
import DeveloperRoadMap from "../../../assets/DeveloperRoadmapMobile.png";
// import grid from "../../assets/grid.png";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default function DeveloperMain() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gradient-to-b from-[#010102] to-[#4f3271]">
      <div className="flex justify-center items-center flex-col">
        <p className="mt-[7%] bg-gradient-to-r from-[#3A235A] to-[#E08DFF] text-white py-[2%] px-[8%] rounded-xl shadow-lg text-3xl font-bold">
          Developer Roadmap
        </p>
        <div className="mt-[10%]">
          <Image src={isMobile ? DeveloperRoadMap : Roadmap} alt="Developer Roadmap" />
        </div>
      </div>
    </div>
  );
}
