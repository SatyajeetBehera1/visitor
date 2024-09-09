import Landing from "./components/Landing/Landing";
import MantrasMain from "./components/Mantras/MantrasMain";
import TableMain from "./components/Table/TableMain";
import MentorMain from "./components/Mentor/MentorMain";
import DeveloperMain from "./components/Developer/DeveloperMain";
import OfferingMain from "./components/Offering/OfferingMain"
import BottomMain from "./components/Bottom/BottomMain";

export default function Home() {
  return (
    <div className="">
     <Landing></Landing>
     <OfferingMain></OfferingMain>
     <MantrasMain></MantrasMain>
     <TableMain></TableMain>
     <MentorMain></MentorMain>
     <DeveloperMain></DeveloperMain>
     <BottomMain></BottomMain>
    </div>
  );
}
// app/page.tsx
// "use client";
// import {UserButton, useUser} from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const {isSignedIn, user, isLoaded} = useUser();

//   return (
//     <div className="text-center flex flex-col gap-4 content-center h-screen items-center">
//       <h1 className="text-2xl mt-4">Hello!</h1>
//       {isSignedIn && <h1 className="text-2xl">You are logged in!</h1>}
//       <div className="flex align-center justify-center">
//         {!isSignedIn ? (
//           <div className="flex gap-2">
//             <div className="px-3 py-2 mb-6 text-xl font-light text-white hover:text-blue-900 hover:bg-white bg-slate-700 rounded-md">
//               <Link href="/sign-up" className="self-center">
//                 Signup
//               </Link>
//             </div>
//             <div className="px-3 py-2 mb-6 text-xl font-light text-white hover:text-blue-900 hover:bg-white bg-slate-700 rounded-md">
//               <Link href="/sign-in" className="self-center">
//                 Login
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <UserButton afterSignOutUrl="/" />
//         )}
//       </div>
//     </div>
//   );
// }