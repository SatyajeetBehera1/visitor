"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const grow = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  width: 20%;
  height: 20%;
  max-width: 300px; /* Limit max size of the image */
`;

const TextWrapper = styled.div`.

  text-align: center;
  display:flex;
justify-content: center;
flex-direction:column;
`;

const Heading = styled.h1`
  font-size: ${(props) => (props.isVisible ? "3.5rem" : "3rem")};
  color: ${(props) => (props.isVisible ? "white" : "DimGray")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out,
    color 1.2s ease-in-out;

  @media (max-width: 767px) {
    font-size: ${(props) => (props.isVisible ? "1.5rem" : "1.5rem")};
  }
`;

const Subheading = styled.p`
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => (props.isVisible ? "white" : "#101010")};
  transition: transform 0.3s ease-in-out, color 1.2s ease-in-out;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export default function MantraCards({ image, heading, subheading }) {
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
    <Card>
      <ImageWrapper className="flex justify-center align-middle mt-2">
        {/* Correctly using the next/image component */}
        <StyledImage src={image} alt="Illustration" />
      </ImageWrapper>
      <TextWrapper>
        <Heading ref={headingRef} isVisible={isVisible}>
          {heading}
        </Heading>
        <Subheading ref={headingRef} isVisible={isVisible}>
          {subheading}
        </Subheading>
      </TextWrapper>
    </Card>
  );
}
