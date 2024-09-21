// // app/sign-up/[[...sign-up]]/page.tsx
// "use client";
// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSignUp } from "@clerk/nextjs";
// import SignupForm from "@/app/components/auth/SignupForm";
// import VerifyForm from "@/app/components/auth/VerifyForm";

// const Signup = () => {
//   const { isLoaded, signUp, setActive } = useSignUp();
//   const [clerkError, setClerkError] = useState("");
//   const router = useRouter();

//   const [verifying, setVerifying] = useState(false);
//   const [code, setCode] = useState("");
//   const [userData, setUserData] = useState<{
//     emailAddress: string;
//     password: string;
//     userName: string;
//     phoneNumber: string;
//   } | null>(null);

//   const signUpWithEmail = async ({
//     emailAddress,
//     password,
//     userName,
//     phoneNumber,
//   }: {
//     emailAddress: string;
//     password: string;
//     userName: string;
//     phoneNumber: string;
//   }) => {
//     if (!isLoaded) {
//       return;
//     }

//     try {
//       // Step 1: First, check with your API
//       const response = await fetch("http://127.0.0.1:8000/api/user/singup/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: userName,
//           email: emailAddress,
//           phone_number: phoneNumber,
//           password,
//         }),
//       });

//       const apiResponse = await response.json();

//       // Step 2: If the API sends an error, show the error and return
//       if (!response.ok) {
//         console.log(apiResponse)
//         setClerkError(apiResponse.message || "API Error: Something went wrong");
//         return;
//       }

//       // Step 3: If no error from API, proceed with Clerk sign-up
//       setUserData({ emailAddress, password, userName, phoneNumber });

//       await signUp.create({
//         emailAddress,
//         password,
//       });

//       // Step 4: Trigger email verification
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

//       setVerifying(true);
//     } catch (error: any) {
//       setClerkError(error.message || "Something went wrong during sign-up");
//     }
//   };

//   const handleVerify = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!isLoaded) return;

//     try {
//       const completeSignUp = await signUp.attemptEmailAddressVerification({
//         code,
//       });

//       if (completeSignUp.status !== "complete") {
//         console.log(JSON.stringify(completeSignUp, null, 2));
//       }

//       if (completeSignUp.status === "complete") {
//         await setActive({ session: completeSignUp.createdSessionId });
//         router.push("/");
//       }
//     } catch (err) {
//       console.log("Error:", JSON.stringify(err));
//       // console.log("Error:", JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <>
//       {!verifying ? (
//         <SignupForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />
//       ) : (
//         <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />
//       )}
//     </>
//   );
// };

// export default Signup;


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
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
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
      // Step 1: First, check with your API
      const response = await fetch("http://127.0.0.1:8000/api/user/singup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          email: emailAddress,
          phone_number: phoneNumber,
          password,
        }),
      });

      const apiResponse = await response.json();

      // Step 2: If the API sends an error, handle it and return
      if (!response.ok) {
        console.log(apiResponse);
        
        // Check if specific errors are returned by the API
        if (apiResponse.errors) {
          const newFormErrors: { [key: string]: string } = {};

          if (apiResponse.errors.username) {
            newFormErrors.userName = apiResponse.errors.username[0];
          }

          if (apiResponse.errors.email) {
            newFormErrors.emailAddress = apiResponse.errors.email[0];
          }

          if (apiResponse.errors.phone_number) {
            newFormErrors.phoneNumber = apiResponse.errors.phone_number[0];
          }

          setFormErrors(newFormErrors);
        } else {
          setClerkError(apiResponse.message || "API Error: Something went wrong");
        }
        return;
      }

      // Step 3: If no error from API, proceed with Clerk sign-up
      setUserData({ emailAddress, password, userName, phoneNumber });

      await signUp.create({
        emailAddress,
        password,
      });

      // Step 4: Trigger email verification
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerifying(true);
    } catch (error: any) {
      setClerkError(error.message || "Something went wrong during sign-up");
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
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
      console.log("Error:", JSON.stringify(err));
      // console.log("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!verifying ? (
        <SignupForm
          signUpWithEmail={signUpWithEmail}
          clerkError={clerkError}
          formErrors={formErrors} // Pass form errors to the component
        />
      ) : (
        <VerifyForm
          handleVerify={handleVerify}
          code={code}
          setCode={setCode}
        />
      )}
    </>
  );
};

export default Signup;
