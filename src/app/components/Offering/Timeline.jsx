import React from "react";
import Image from "next/image";
import Polygon1 from "../../../assets/Polygon1.png";
import Polygon2 from "../../../assets/Polygon2.png";

export default function Timeline() {
  return (
    <div className=" -mt-[8.35%] px-4 sm:px-8 md:px-12 lg:px-20">
      <ol className="relative border-l-4 border-white">
        <li className="mb-10 md:mb-12 ml-4 sm:ml-8">
          <div className="flex flex-col">
            <div className="bg-transparent p-4 sm:p-6"></div>
          </div>
        </li>
        <li className="mb-8 md:mb-12 ml-4 sm:ml-8 mt-8 sm:mt-16">
          <div className="absolute w-12 h-12 bg-white rounded-full left-0 sm:-left-6 flex items-center justify-center text-white border-4 border-white"></div>
          <div className="flex mt-[12%]">
            <h3 className="mb-2 sm:mb-3 text-xl sm:text-3xl font-semibold text-[#3E265E]">
              BOOT CAMP
            </h3>
            {/* Using Next.js Image component */}
            <Image 
              src={Polygon1} 
              alt="Polygon1" 
              className="w-auto h-12 ml-[2%]"
            />
          </div>
          <div className="max-w-lg mt-2 sm:mt-[3%]">
            <div className="rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col bg-[#3E265E] p-4 sm:p-6">
                <div className="flex items-center mb-2 sm:mb-4">
                  <div className="h-10 w-10 border border-white bg-white rounded-full flex items-center justify-center text-[#3E265E] mr-2 sm:mr-4"></div>
                  <div className="text-lg sm:text-2xl font-medium text-white">
                    Full Stack Development
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-black bg-white p-4 sm:p-6">
                <p className="font-medium">140+ hrs of Content</p>
                <p className="font-medium">300+ Problems</p>
              </div>
            </div>
          </div>
        </li>
        <li className="mb-8 md:mb-12 ml-4 sm:ml-8">
          <div className="absolute w-12 h-12 bg-white rounded-full left-0 sm:-left-6 flex items-center justify-center text-white"></div>
          <div className="flex mt-[12%]">
            <h3 className="mb-2 sm:mb-3 text-xl sm:text-3xl font-semibold text-[#3E265E]">
              TechVarsity
            </h3>
            {/* Using Next.js Image component */}
            <Image 
              src={Polygon2} 
              alt="Polygon2" 
              className="w-auto h-12 ml-[2%]"
            />
          </div>
        </li>
      </ol>
      <div className="w-full sm:w-3/5 mt-4 sm:mt-8 ml-4 sm:ml-12">
        <div className="rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col bg-[#3E265E] p-4 sm:p-6">
            <div className="flex items-center mb-2 sm:mb-4">
              <div className="h-10 w-10 border border-white bg-white rounded-full flex items-center justify-center text-[#3E265E] mr-2 sm:mr-4"></div>
              <div className="flex flex-col">
                <div className="text-lg sm:text-2xl font-medium text-white">
                  Coding Seals TechVarsity
                </div>
                <div className="text-base sm:text-lg font-medium text-white">
                  Complete CS Education to transform you into a 10X Developer
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-black bg-white p-4 sm:p-6">
            <p className="font-medium">500+ hrs of Content</p>
            <p className="font-medium">40 Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
