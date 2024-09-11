// "use client";
// import React, { FormEvent } from "react";
// import Image from "next/image";
// import styled from "styled-components";
// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import signup_bottomCircle from "../../../assets/signup_bottomCircle.svg";
// import signup_upperCircle from "../../../assets/signup_upperCircle.svg";

// const GlassContainer = styled.div`
//   position: relative;
//   background: rgba(255, 255, 255, 0.1);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(15px);
//   border-radius: 20px;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   z-index: 1;
// `;

// const Circle = styled(Image)`
//   position: absolute;
//   z-index: 0;
//   &:nth-child(1) {
//     top: -50px;
//     right: -100px;
//     width: 200px;
//     height: 200px;
//   }
//   &:nth-child(2) {
//     bottom: -100px;
//     left: -50px;
//     width: 250px;
//     height: 250px;
//   }
// `;

// interface SignInPageProps {
//   signInWithEmail: ({
//     emailAddress,
//     password,
//   }: {
//     emailAddress: string;
//     password: string;
//   }) => void;
//   clerkError: string;
// }

// const SigninForm=({ signInWithEmail, clerkError }: SignInPageProps) =>{
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const target = e.target as typeof e.target & {
//       email: { value: string };
//       password: { value: string };
//     };
//     const email = target.email.value;
//     const password = target.password.value;
//     signInWithEmail({ emailAddress: email, password: password });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-black text-white px-12 overflow-hidden relative">
//       <div className="flex flex-col justify-start items-start space-y-8 w-[70%] p-8">
//         <div className="text-[5rem] font-bold tracking-wide">
//           Welcome Back .!
//         </div>

//         <div className="flex items-center w-full">
//           <div className="border-4 border-white px-6 py-3 text-lg">
//             Skip&nbsp;the&nbsp;Lag&nbsp;?
//           </div>
//           <div className="w-full border-t-2 border-dashed border-white ml-4"></div>
//         </div>
//       </div>

//       <div className="relative w-[30%] h-auto">
//         <Circle src={signup_upperCircle} alt="Upper Circle" />
//         <Circle src={signup_bottomCircle} alt="Bottom Circle" />

//         <GlassContainer className="glass-container">
//           <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
//             <div>
//               <div className="text-3xl font-semibold text-start">Sign In</div>
//             </div>
//             <div className="text-sm font-semibold text-start">
//               Glad you’re back.!
//             </div>

//             <label htmlFor="email" className="sr-only">Email address</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="userEmail"
//               className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
//               required
//             />

//             <label htmlFor="password" className="sr-only">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="userPassword"
//               className="w-full p-2 rounded-2xl bg-transparent border-2 border-white placeholder-white text-lg focus:outline-none"
//               required
//             />

//             <h2 className="text-red-500 text-center">
//               {clerkError && <p>{clerkError}</p>}
//             </h2>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="w-full text-white py-3 rounded-2xl transition-colors duration-300"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #628EFF 0%, #8740CD 53%, #580475 100%)",
//                 }}
//               >
//                 LogIn
//               </button>
//             </div>

//             <div className="flex justify-center">
//               <Link href="../ForgetPass" className="no-underline">
//                 <p className="text-sm">Forgot password ?</p>
//               </Link>
//             </div>

//             <div className="flex items-center my-4">
//               <div className="border-t-2 border-solid border-white w-1/2"></div>
//               <p className="mx-4 text-sm">or</p>
//               <div className="border-t-2 border-solid border-white w-1/2"></div>
//             </div>

//             <div className="flex space-x-5 justify-center">
//               <FcGoogle className="h-10 w-10" />
//               <FaGithub className="h-10 w-10" />
//               <FaLinkedin className="h-10 w-10" />
//             </div>

//             <div className="flex justify-center">
//               <Link href="/sign-up" className="no-underline">
//                 <p className="text-sm">Don’t have an account ? Signup</p>
//               </Link>
//             </div>

//             <div className="flex space-x-5 items-center justify-center">
//               <p className="text-sm">Terms & Conditions</p>
//               <p className="text-sm">Support</p>
//               <p className="text-sm">Customer Care</p>
//             </div>
//           </form>
//         </GlassContainer>
//       </div>
//     </div>
//   );
// }

// export default SigninForm;


"use client";
import React, { FormEvent } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSignIn } from "@clerk/nextjs"; // Import Clerk's useSignIn hook
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

interface SignInPageProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SigninForm = ({ signInWithEmail, clerkError }: SignInPageProps) => {
  const { signIn } = useSignIn(); // Get the signIn object

  if (!signIn) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    signInWithEmail({ emailAddress: email, password: password });
  };

  // Google OAuth sign-in
  const signInWithGoogle = () => {
    return signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sign-in/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  // GitHub OAuth sign-in
  const signInWithGithub = () => {
    return signIn.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/sign-in/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  // LinkedIn OAuth sign-in
  const signInWithLinkedin = () => {
    return signIn.authenticateWithRedirect({
      strategy: "oauth_linkedin",
      redirectUrl: "/sign-in/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white px-12 overflow-hidden relative">
      <div className="flex flex-col justify-start items-start space-y-8 w-[70%] p-8">
        <div className="text-[5rem] font-bold tracking-wide">Welcome Back .!</div>

        <div className="flex items-center w-full">
          <div className="border-4 border-white px-6 py-3 text-lg">
            Skip&nbsp;the&nbsp;Lag&nbsp;?
          </div>
          <div className="w-full border-t-2 border-dashed border-white ml-4"></div>
        </div>
      </div>

      <div className="relative w-[30%] h-auto">
        <Circle src={signup_upperCircle} alt="Upper Circle" />
        <Circle src={signup_bottomCircle} alt="Bottom Circle" />

        <GlassContainer className="glass-container">
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <div className="text-3xl font-semibold text-start">Sign In</div>
            </div>
            <div className="text-sm font-semibold text-start">
              Glad you’re back.!
            </div>

            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="userEmail"
              className="w-full p-2 rounded-2xl bg-transparent border-2 text-lg border-white placeholder-white focus:outline-none"
              required
            />

            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="userPassword"
              className="w-full p-2 rounded-2xl bg-transparent border-2 border-white placeholder-white text-lg focus:outline-none"
              required
            />

            <h2 className="text-red-500 text-center">
              {clerkError && <p>{clerkError}</p>}
            </h2>

            <div className="text-center">
              <button
                type="submit"
                className="w-full text-white py-3 rounded-2xl transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #628EFF 0%, #8740CD 53%, #580475 100%)",
                }}
              >
                Log In
              </button>
            </div>

            <div className="flex justify-center">
              <Link href="../ForgetPass" className="no-underline">
                <p className="text-sm">Forgot password ?</p>
              </Link>
            </div>

            <div className="flex items-center my-4">
              <div className="border-t-2 border-solid border-white w-1/2"></div>
              <p className="mx-4 text-sm">or</p>
              <div className="border-t-2 border-solid border-white w-1/2"></div>
            </div>

            {/* OAuth buttons */}
            <div className="flex space-x-5 justify-center">
              <button type="button" onClick={signInWithGoogle}>
                <FcGoogle className="h-10 w-10" />
              </button>
              <button type="button" onClick={signInWithGithub}>
                <FaGithub className="h-10 w-10" />
              </button>
              <button type="button" onClick={signInWithLinkedin}>
                <FaLinkedin className="h-10 w-10" />
              </button>
            </div>

            <div className="flex justify-center">
              <Link href="/sign-up" className="no-underline">
                <p className="text-sm">Don’t have an account? Sign up</p>
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

export default SigninForm;
