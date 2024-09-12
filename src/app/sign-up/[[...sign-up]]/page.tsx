// app/sign-up/[[...sign-up]]/page.tsx
"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import SignupForm from "@/app/components/auth/SignupForm";
import VerifyForm from "@/app/components/auth/VerifyForm";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [userData, setUserData] = useState<{
    emailAddress: string;
    password: string;
    userName: string;
    phoneNumber: string;
  } | null>(null);

  const signUpWithEmail = async ({
    emailAddress,
    password,
    userName,
    phoneNumber,
  }: {
    emailAddress: string;
    password: string;
    userName: string;
    phoneNumber: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });
      setUserData({ emailAddress, password, userName, phoneNumber });
      try {
        if (userData) {
          const response = await fetch("http://127.0.0.1:8000/api/user/singup/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userData.userName,
              email: userData.emailAddress,
              phone_number: userData.phoneNumber,
              password: userData.password,
            }),
          });
          const errorData = await response.json();
          setClerkError(errorData.message || "API Error: Something went wrong");

          if (response.ok) {
            console.log("All okay");
          }
        }
      } catch (error) {
        console.log("Degubber in catch");
        console.log(error)
      }

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerifying(true);
    } catch (err: any) {
      setClerkError(err.errors[0].message);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      console.log("Degubber in try");
      
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err) {
      console.log("Degubber in catch");
      console.log("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!verifying ? (
        <SignupForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />
      ) : (
        <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />
      )}
    </>
  );
};

export default Signup;
