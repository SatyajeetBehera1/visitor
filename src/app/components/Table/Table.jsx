'use client'
import React, { useEffect, useRef, useState } from "react";
import smallcompanyLogo from "../../../assets/codeSeals.png";
import bigcompanyLogo from "../../../assets/logo.png";
import styled, { keyframes } from 'styled-components';
import { ImCross } from "react-icons/im";
import Image from "next/image"

import { FaCheck } from "react-icons/fa";
import gsap from "gsap";

const gradientMove = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const BlackgradientMove = keyframes`
  0% {
    width: 0%;
  }
  75% {
    width: 75%;
  }
`;

const OriginalGradientDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f97316, #ef4444); 
  background-size: 200% 200%;
  animation: ${gradientMove} 5s;
`;

const BlackishGradientDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background: linear-gradient(to right, #2f394d, #071f49);
  background-size: 200% 200%;
  animation: ${BlackgradientMove} 5s;
`;

const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
`;

export default function Table() {
  const gradientRef1 = useRef(null);
  const gradientRef2 = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gradientRef1.current && gradientRef2.current) {
      observer.observe(gradientRef1.current);
      observer.observe(gradientRef2.current);
    }

    return () => {
      if (gradientRef1.current) observer.unobserve(gradientRef1.current);
      if (gradientRef2.current) observer.unobserve(gradientRef2.current);
    };
  }, []);

  useEffect(() => {
    if (animate) {
      gsap.fromTo(gradientRef1.current, { opacity: 0 }, { opacity: 1, duration: 2 });
      gsap.fromTo(gradientRef2.current, { opacity: 0 }, { opacity: 1, duration: 2 });
    }
  }, [animate]);

  return (
    <div className="overflow-x-auto border-2 border-white rounded-3xl w-[90%] md:w-[50%] mx-auto mt-8 shadow-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-transparent text-left text-white">
            <th className="p-4"></th>
            <th className="md:py-4 md:px-8">
              <Image
                src={smallcompanyLogo}
                alt="Small Company Logo"
                className="w-8 h-8 md:w-8 md:h-8 mx-auto"
              />
            </th>
            <th className="p-4">Free Resources</th>
            <th className="p-4">Other Courses</th>
          </tr>
        </thead>
        <tbody className="bg-transparent text-white">
          <tr>
            <td className="p-4">INDUSTRY READY CURRICULUM</td>
            <td className="p-4 text-center">
              <FaCheck className="text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4">DOUBLE SUPPORT</td>
            <td className="p-4 text-center">
              <FaCheck className="text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <FaCheck className="text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4">DEV COMMUNITY</td>
            <td className="p-4 text-center">
              <FaCheck className="text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4">AI INFUSED</td>
            <td className="p-4 text-center">
              <FaCheck className="text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center">
              <ImCross className="text-red-500 mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 mb-6 p-2 flex flex-col justify-center items-center">
        <div className="w-[90%]">
          <div className="flex w-full items-center justify-between">
            <Image
              src={bigcompanyLogo}
              alt="Big Company Logo"
              className="h-[50px] w-auto md:w-auto"
            />
            <p className="ml-4 text-xs md:text-lg text-white font-semibold">
              Be a developer, faster & confident
            </p>
          </div>
          <RelativeDiv className="relative w-full mx-auto h-1 bg-black rounded-lg">
            <OriginalGradientDiv ref={gradientRef1} className="rounded-lg"/>
          </RelativeDiv>
        </div>
        <div className="w-[90%]">
          <div className="flex items-center mt-4 justify-between mb-2">
            <p className="text-white text-lg font-semibold ml-2">Other</p>
            <p className="ml-4 text-xs md:text-lg text-white font-semibold">
              Be a developer, slower & under-confident
            </p>
          </div>
          <RelativeDiv className="relative w-full mx-auto h-1 bg-black rounded-lg">
            <BlackishGradientDiv ref={gradientRef2} className="rounded-lg"/>
          </RelativeDiv>
        </div>
      </div>
    </div>
  );
}
