// app/sign-up/[[...sign-up]]/page.tsx
"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import SignupForm from "@/app/components/auth/SignupForm";
import VerifyForm from "@/app/components/auth/VerifyForm";

const Signup = () => {
  const {isLoaded, signUp, setActive} = useSignUp();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");

  const signUpWithEmail = async ({
    emailAddress,
    password
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });
      await signUp.prepareEmailAddressVerification({strategy: "email_code"});

      setVerifying(true);
    } catch (err: any) {
      setClerkError(err.errors[0].message);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    
    try {
      console.log("Degubber in try")
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
        // strategy: 'email_code',
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === "complete") {
        await setActive({session: completeSignUp.createdSessionId});
        router.push("http://localhost:3000/");
      }
    } catch (err) {
      console.log("Degubber in catch")
      console.log("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!verifying ?
        (<SignupForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />) :
        (<VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />)
      }
    </>
  )

};

export default Signup;
