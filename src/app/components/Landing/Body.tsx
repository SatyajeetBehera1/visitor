import Image from "next/image";
import Developer from "../../../assets/developer1.png";

export default function Body({ isMobile }) {
  return (
    <div
      className={`flex flex-col md:flex-row h-full items-center md:items-start space-y-6 md:space-y-0 mt-[2%] ${
        isMobile ? "ml-[6%]" : ""
      }`}
    >
      <div className="w-full space-y-6 md:ml-[5%] mt-4 md:mt-0">
        <div className="space-y-2">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B378D] via-[#5A378A] to-[#7C4BC0] text-4xl font-bold">
            Developer
          </h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B378D] via-[#5A378A] to-[#7C4BC0] text-4xl font-bold">
            Apprentice Wanted
          </h1>
        </div>
        <div className="space-y-2">
          <h1 className="text-white text-4xl font-bold">Unleash your Inner</h1>
          <h1 className="text-white text-4xl font-bold">
            Genius with Coding Gurus
          </h1>
        </div>
        <div className="space-y-1">
          <p className="text-gray-200 text-lg md:text-3xl">
            It’s not a course, it is an Industry Tested
          </p>
          <p className="text-gray-200 text-lg md:text-3xl">
            Training Program to make developers out of you
          </p>
        </div>
        <div>
          <a href="#apply" className="no-underline">
            <button className="bg-gradient-to-r from-[#3A235A] to-[#E08DFF] text-white py-[3%] px-[15%] rounded-lg shadow-lg">
              APPLY NOW
            </button>
          </a>
        </div>
        <div>
          <p className="text-gray-200 text-sm md:text-lg">
            In the last 10 hours, 6 learners have onboarded with us
          </p>
        </div>
      </div>
      {!isMobile && (
        <div className="md:ml-6 mt-4 md:mt-0">
          <div className="relative">
            <Image
              src={Developer}
              alt="Developer Illustration"
              className="w-full h-auto rounded-lg shadow-lg "
            />
          </div>
        </div>
      )}
    </div>
  );
}
