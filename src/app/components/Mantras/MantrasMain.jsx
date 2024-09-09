'use client'
import React, { useState, useEffect, useRef } from "react";
import Body from "./Body";
import styled, { keyframes } from "styled-components";

const grow = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const shrink = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const Wrapper = styled.section`
  .text {
    background-image: linear-gradient(180deg, #ae6ba9, #ef8634);
    -webkit-background-clip: text;
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: transparent;
    background-clip: text;
    font-size: 15vw;
    text-align: center;
    margin-top: 5%;
  }
`;

const FocusHeading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  transition: transform 0.3s ease-in-out;
  animation: ${(props) => (props.isVisible ? grow : shrink)} 0.3s forwards;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

export default function MantrasMain() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, [headingRef]);

  return (
    <div className="bg-black ">
      <div className="bg-black h-auto flex flex-col justify-center items-center p-6">
        <div className="header mt-[5%]">
          <div>
            <FocusHeading
              tabIndex="0"
              ref={headingRef}
              isVisible={isVisible}
              className="flex items-center justify-center"
            >
              7&nbsp;Mantras
            </FocusHeading>
            <div>
              <p className="text-white text-3xl md:text-[200%] flex items-center justify-center">
                to Unleash Your Inner
              </p>
              <p className="text-white text-3xl md:text-[200%] flex items-center justify-center mb-10">
                Rockstar Developer
              </p>
            </div>
          </div>
        </div>
        <Body />
      </div>
      <Wrapper>
        <h1 className="text flex items-center justify-center mt-[10%] text-black">
          WHY US
        </h1>
      </Wrapper>
    </div>
  );
}
