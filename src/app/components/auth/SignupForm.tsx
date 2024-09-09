"use client";
import React, { FormEvent } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import signup_bottomCircle from "../../../assets/signup_bottomCircle.svg";
import signup_upperCircle from "../../../assets/signup_upperCircle.svg";
import { OAuthStrategy } from '@clerk/types';
import { useSignIn } from '@clerk/nextjs';

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

interface SignUpFormProps {
  signUpWithEmail: ({
    emailAddress,
    password,
    phonenumber,
    username,
  }: {
    emailAddress: string;
    password: string;
    phonenumber: string;
    username: string;
  }) => void;
  clerkError: string;
}

const SignupForm = ({ signUpWithEmail, clerkError }: SignUpFormProps) => {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sign-up/sso-callback',
      redirectUrlComplete: '/',
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      username: { value: string };
      phonenumber: { value: string };
    };
    
    const email = target.email.value;
    const password = target.password.value;
    const username = target.username.value;
    const phonenumber = target.phonenumber.value;

    // Call the signUpWithEmail function with all fields
    signUpWithEmail({ emailAddress: email, password, username, phonenumber });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white px-12 overflow-hidden relative">
      <div className="flex flex-col justify-start items-start space-y-8 w-[70%] p-8">
        <div className="text-[5rem] font-bold tracking-wide">Roll the Carpet!</div>

        <div className="flex items-center w-full">
          <div className="border-4 border-white px-6 py-3 text-lg">Skip&nbsp;the&nbsp;Lag&nbsp;?</div>
          <div className="w-full border-t-2 border-dashed border-white ml-4"></div>
        </div>
      </div>

      <div className="relative w-[30%] h-auto">
        <Circle src={signup_upperCircle} alt="Upper Circle" />
        <Circle src={signup_bottomCircle} alt="Bottom Circle" />

        <GlassContainer className="glass-container">
          <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
            <div>
              <div className="text-3xl font-semibold text-start">Sign Up</div>
            </div>
            <div className="text-sm font-semibold text-start">Just some details to get you in.!</div>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white focus:outline-none"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
              required
            />

            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone Number"
              className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 rounded-2xl bg-transparent border-2 border-white placeholder-white text-lg focus:outline-none"
              required
            />

            {/* Display error message */}
            {clerkError && <p className="text-red-500">{clerkError}</p>}

            <div className="text-center">
              <button
                type="submit"
                className="w-full text-white py-3 rounded-2xl transition-colors duration-300"
                style={{
                  background: "linear-gradient(90deg, #2E4CEE 0%, #221EBF 53%, #040F75 100%)",
                }}
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="border-t-2 border-solid border-white w-1/2"></div>
              <p className="mx-4 text-sm">or</p>
              <div className="border-t-2 border-solid border-white w-1/2"></div>
            </div>

            <div className="flex space-x-5 justify-center">
              <button type="button" onClick={() => signInWith('oauth_google')}>
                <FcGoogle className="h-10 w-10" />
              </button>
              <FaGithub className="h-10 w-10" />
              <FaLinkedin className="h-10 w-10" />
            </div>

            <div className="flex justify-center">
              <Link href="/sign-in" className="no-underline">
                <p className="text-sm">Already Registered? Login</p>
              </Link>
            </div>

            <div className="flex space-x-5 items-center justify-center">
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

export default SignupForm;
