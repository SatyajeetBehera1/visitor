import React from "react";
import Table from "./Table";
import Image from "next/image"
import vector_2 from "../../../assets/vector_2.svg";

export default function TableMain() {
  return (
    <div className="bg-gradient-to-b from-[#010102] to-[#4f3271] ">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-[#BD62FF] text-2xl md:text-4xl mb-4 text-center">
          The Code Seals Advantage
        </p>
        <div className="w-full">
          <Table />
        </div>
        <div className="mt-8 flex justify-center mb-[5%]">
          <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white text-3xl font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center">
            Explore Offerings&nbsp;
            <div className="flex flex-col ml-1">
              <Image src={vector_2} alt="Arrow" className="h-4 w-4 mb-1" />
              <Image src={vector_2} alt="Arrow" className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
