'use client'
import { useState, useEffect } from "react";
import Navbar from "./Navbar.tsx";
import Body from "./Body.tsx";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black h-screen">
      <Navbar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Body isMobile={isMobile} />
    </div>
  );
}
