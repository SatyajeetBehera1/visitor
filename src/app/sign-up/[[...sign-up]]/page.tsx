"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import SignupForm from "@/app/components/auth/SignupForm";
import VerifyForm from "@/app/components/auth/VerifyForm";
import { useSignUp } from "@clerk/nextjs";

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

  // Step 1: Sign up the user with Clerk (prepare email verification)
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

      // Save user data for later API request
      setUserData({ emailAddress, password, userName, phoneNumber });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err: any) {
      setClerkError(err.errors[0].message);
    }
  };

  // Step 2: Handle the verification and send data to the external API after success
  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });

        // Now send user data to the external API since email is verified
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

          if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Expected: "Register successful"
            router.push("/success");
          } else {
            const errorData = await response.json();
            setClerkError(errorData.message || "Something went wrong");
          }
        }
      } else {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      setClerkError("Verification failed. Please try again.");
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
