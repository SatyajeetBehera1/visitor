"use client";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import signup_bottomCircle from "../../assets/signup_bottomCircle.svg";
import signup_upperCircle from "../../assets/signup_upperCircle.svg";

const GlassContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Button loading state

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  // If user is already signed in, redirect to the home page
  if (isSignedIn) {
    router.push("/");
  }

  // Send the password reset code to the user's email
  async function create(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then(() => {
        setSuccessfulCreation(true);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
        setLoading(false);
      });
  }

  // Reset the password using the code
  async function reset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        if (result.status === "needs_second_factor") {
          setSecondFactor(true);
          setError("");
        } else if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          setError("");
          router.push("/");
        } else {
          setError("Unexpected status: " + result.status);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
        setLoading(false);
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white px-12 overflow-hidden relative">
      <div className="flex flex-col justify-start items-start space-y-8 w-[70%] p-8">
        <div className="text-[5rem] font-bold tracking-wide">
          No Worries.!!
        </div>
        <div className="flex items-center w-full">
          <div className="border-4 border-white px-6 py-3 text-lg">
            Take&nbsp;me&nbsp;Back&nbsp;.!
          </div>
          <div className="w-full border-t-2 border-dashed border-white ml-4"></div>
        </div>
      </div>

      <div className="relative w-[30%] h-auto">
        <Circle src={signup_upperCircle} alt="Upper Circle" />
        <Circle src={signup_bottomCircle} alt="Bottom Circle" />

        <GlassContainer className="glass-container">
          <form
            className="space-y-4 relative z-10 flex flex-col h-[550px]"
            onSubmit={!successfulCreation ? create : reset}
          >
            <div>
              <div className="text-3xl font-semibold text-start">
                Forgot Password ?
              </div>
            </div>
            <div className="text-sm font-semibold text-start">
              {successfulCreation
                ? "Enter the password reset code and your new password."
                : "Please enter your email"}
            </div>

            {!successfulCreation && (
              <input
                type="email"
                id="email"
                placeholder="userEmail"
                className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}

            {successfulCreation && (
              <>
                <input
                  type="text"
                  id="code"
                  placeholder="Enter reset code"
                  className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />

                <input
                  type="password"
                  id="password"
                  placeholder="New Password"
                  className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </>
            )}

            <div className="text-center mt-auto">
              <button
                type="submit"
                className="w-full text-white py-3 rounded-2xl transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #628EFF 0%, #8740CD 53%, #580475 100%)",
                }}
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : successfulCreation
                  ? "Reset Password"
                  : "Send Reset Code"}
              </button>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Bottom Section */}
            <div className="bottom mt-auto" style={{ marginTop: 300 }}>
              <div className="flex justify-center">
                <Link href="../../signup" className="no-underline">
                  <p className="text-sm">Don’t have an account? Signup</p>
                </Link>
              </div>

              <div className="flex space-x-5 items-center justify-center">
                <p className="text-sm">Terms & Conditions</p>
                <p className="text-sm">Support</p>
                <p className="text-sm">Customer Care</p>
              </div>
            </div>
          </form>
        </GlassContainer>
      </div>
    </div>
  );
}
