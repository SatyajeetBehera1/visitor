import React from "react";

export default function MobileView() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 mt-[10%]">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-3xl font-semibold text-[#3E265E]">
          BOOT CAMP
        </h3>
        <div className="max-w-lg mt-2 sm:mt-3">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col bg-[#3E265E] p-4 sm:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="h-10 w-10 border border-white bg-white rounded-full flex items-center justify-center text-[#3E265E] mr-2 sm:mr-4"></div>
                <div className="text-lg sm:text-xl font-medium text-white">
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
      </div>

      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-3xl font-semibold text-[#3E265E]">
          TechVarsity
        </h3>
        <div className="w-full sm:w-3/5 mt-3 sm:mt-6">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col bg-[#3E265E] p-4 sm:p-6">
              <div className="flex flex-col items-start justify-start mb-3 sm:mb-4">
                <div className="flex w-full">
                  <div className="h-10 w-10 border border-white bg-white rounded-full flex ml-[2%] text-[#3E265E] mr-2"></div>
                  <div className="text-lg sm:text-xl font-medium text-white">
                    Coding Seals TechVarsity
                  </div>
                </div>
                <div className="text-base sm:text-lg font-medium text-white">
                  Complete CS Education to transform you into a 10X Developer
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
    </div>
  );
}
