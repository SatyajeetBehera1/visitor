"use client";
import React, { FormEvent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import signup_bottomCircle from "../../../assets/signup_bottomCircle.svg";
import signup_upperCircle from "../../../assets/signup_upperCircle.svg";

const GlassContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 1;
`;

const Circle = styled(Image)`
  position: absolute;
  z-index: 0;
  &:nth-child(1) {
    top: -50px;
    right: -100px;
    width: 200px;
    height: 200px;
  }
  &:nth-child(2) {
    bottom: -100px;
    left: -50px;
    width: 250px;
    height: 250px;
  }
`;

interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
}

const VerifyForm = ({ handleVerify, code, setCode }: VerifyFormProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white px-12 overflow-hidden relative">
      {/* Left Side - Hidden on mobile screens */}
      <div className="hidden md:flex flex-col justify-start items-start space-y-8 w-[70%] p-8">
        <div className="text-[5rem] font-bold tracking-wide">
          Welcome Back .!
        </div>

        <div className="flex items-center w-full">
          <div className="border-4 border-white px-6 py-3 text-lg">
            Skip&nbsp;the&nbsp;Lag&nbsp;?
          </div>
          <div className="w-full border-t-2 border-dashed border-white ml-4"></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="relative w-full md:w-[30%] h-auto flex items-center justify-center">
        <Circle src={signup_upperCircle} alt="Upper Circle" />
        <Circle src={signup_bottomCircle} alt="Bottom Circle" />

        <GlassContainer className="glass-container">
          <form
            onSubmit={handleVerify}
            className="space-y-4 relative z-10"
          >
            <div>
              <div className="text-3xl font-semibold text-start">
                Verify yourself
              </div>
            </div>
            <div className="text-sm font-semibold text-start">Just a bit.!</div>

            <label htmlFor="code" className="sr-only">
              Verification Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter verification code"
              className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
              required
            />

            <div className="text-center">
              <button
                type="submit"
                className="w-full text-white py-3 rounded-2xl transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #628EFF 0%, #8740CD 53%, #580475 100%)",
                }}
              >
                Way to Login
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="border-t-2 border-solid border-white w-1/2"></div>
              <p className="mx-4 text-sm">or</p>
              <div className="border-t-2 border-solid border-white w-1/2"></div>
            </div>

            <div className="flex space-x-5 justify-center">
              <FcGoogle className="h-10 w-10" />
              <FaGithub className="h-10 w-10" />
              <FaLinkedin className="h-10 w-10" />
            </div>

            <div className="flex space-x-5 items-center justify-center mt-16">
              <p className="text-sm">Terms & Conditions</p>
              <p className="text-sm">Support</p>
              <p className="text-sm">Customer Care</p>
            </div>
          </form>
        </GlassContainer>
      </div>
    </div>
  );
};

export default VerifyForm;
