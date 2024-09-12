"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import vector_2 from "../../../assets/vector_2.svg";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar({ isOpen, isMobile, setIsOpen }) {
  const { isSignedIn, user, isLoaded } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-1 shadow-lg">
        <div className="flex items-center space-x-6">
          <a href="#">
            <div>
              <Image src={logo} alt="Developer Illustration" className="z-20" />
            </div>
          </a>
          <div className="hidden md:block">
            <a
              href="#learn"
              className="no-underline flex items-center space-x-2 text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl"
            >
              <p>Learn</p>
              <div className="h-3 w-3 flex flex-col">
                <Image src={vector_2} alt="Arrow" />
                <Image src={vector_2} alt="Arrow" />
              </div>
            </a>
          </div>
          <div className="hidden md:block text-white cursor-pointer">About</div>
        </div>
        <div className="hidden md:flex items-center space-x-10 mr-[3%]">
          {!isSignedIn ? (
            <Link href="/sign-in" className="no-underline">
              <button className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl">
                Login
              </button>
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
          {/* <Link href="../../Login" className="no-underline">
            <button className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl">
              Login
            </button>
          </Link> */}
          <a href="#apply" className="no-underline">
            <div className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl cursor-pointer">
              Apply as Mentor
            </div>
          </a>
        </div>
        <div onClick={toggleMenu} className="cursor-pointer md:hidden z-20">
          <svg
            className="stroke-dark-heading stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {isMobile && isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center z-10">
            <div className="flex flex-col items-center space-y-4 p-4">
            {!isSignedIn ? (
                <Link href="/sign-in" className="no-underline">
                  <button className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl">
                    Login
                  </button>
                </Link>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
              <a href="#learn" className="no-underline">
                <button className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl">
                  Learn
                </button>
              </a>
              <a href="#about" className="no-underline">
                <div className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl">
                  About
                </div>
              </a>

              {/* <Link href="../../Login" className="no-underline">
                <button className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl">
                  Login
                </button>
              </Link> */}
              <a href="#apply" className="no-underline">
                <div className="text-white border-[#E08DFF] border-2 px-6 py-2 rounded-2xl cursor-pointer">
                  Apply as Mentor
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
