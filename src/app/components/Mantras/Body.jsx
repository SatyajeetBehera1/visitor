'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Rocket from "../../../assets/Rocket.png";
import Medal from "../../../assets/Medal.png";
import Scholarship from "../../../assets/Scholarship.png";
import Bulb from "../../../assets/Bulb.png";
import Lock from "../../../assets/Lock.png";
import Book from "../../../assets/Book.png";
import Prize from "../../../assets/Prize.png";
import MantraCards from "./MantraCards";

const mantraCardsData = [
  {
    image: Rocket,
    heading: "Skill Up for Tomorrow",
    subheading: "The Skills You Need, Now and Beyond.",
  },
  {
    image: Medal,
    heading: "Code. Built. Conquer.",
    subheading: "Immerse Yourself in hands-on Learning",
  },
  {
    image: Scholarship,
    heading: "Collaborate, Learn, Share",
    subheading: "Be Part of Our Vibrant Developer Community.",
  },
  {
    image: Bulb,
    heading: "Learn Smarter, Not Harder",
    subheading: "One-on-One Mentorship",
  },
  {
    image: Lock,
    heading: "Unlock Insider Knowledge",
    subheading: "Decode the Code with Industry Gurus",
  },
  {
    image: Book,
    heading: "Targeted Practice",
    subheading: "Curated Assignments and Assessments",
  },
  {
    image: Prize,
    heading: "Real-World Experience",
    subheading: "Internships",
  },
];

const Body = () => {
  const parentRefs = useRef([]);
  const [visiblePercentages, setVisiblePercentages] = useState(
    Array(mantraCardsData.length).fill(0)
  );
  const [reachedFullHeight, setReachedFullHeight] = useState(
    Array(mantraCardsData.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const updatedPercentages = [...visiblePercentages];
      const updatedReached = [...reachedFullHeight];
      parentRefs.current.forEach((parent, index) => {
        const rect = parent.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - rect.top;
        const percentVisible = (visibleHeight / rect.height) * 100;

        if (!updatedReached[index] && percentVisible >= 100) {
          updatedReached[index] = true;
          updatedPercentages[index] = 100;
          gsap.to(parent, {
            height: "100%",
            duration: 1,
            ease: "power2.out",
          });
        } else if (percentVisible < 100) {
          updatedPercentages[index] = percentVisible;
        }
      });
      setVisiblePercentages(updatedPercentages);
      setReachedFullHeight(updatedReached);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visiblePercentages, reachedFullHeight]);

  return (
    <div className="flex flex-col justify-center items-center">
      {mantraCardsData.map((card, index) => (
        <div
          key={index}
          className="Parent flex flex-col justify-center items-center h-[100vh] mt-3"
          ref={(el) => (parentRefs.current[index] = el)}
          style={{
            height: reachedFullHeight[index] ? "100%" : "auto",
            transition: "height ease-in-out",
          }}
        >
          <div className="border-s-[4px] h-[250px] border-gray-800 relative">
            <div
              className="absolute top-0 left-0 right-0 border-s-[4px] ml-[-4px] border-white"
              style={{
                height: `${visiblePercentages[index]}%`,
                transition: "height ease-in-out",
              }}
            ></div>
          </div>
          <MantraCards
            image={card.image}
            heading={card.heading}
            subheading={card.subheading}
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
