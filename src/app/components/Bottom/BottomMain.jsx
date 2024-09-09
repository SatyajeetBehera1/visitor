'use client'
import React from "react";
import bottomGrid from "../../../assets/bottomGrid.png";
import logo from "../../../assets/logo.png";
import styled from "styled-components";
import { FiPhone } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image"

const Wrapper = styled.section`
  .bord {
    border-style: solid;
    border-width: 0px 0px 5px 5px;
    border-color: #fff;
    padding: 5%;
    height: 100%;
    text-align: left;
    max-width: 700px;
    background-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    .bord {
      border-style: solid;
      border-width: 0px 0px 0px 0px;
      border-color: #fff;
      padding: 5%;
      height: 100%;
      text-align: left;
      max-width: 700px;
      background-color: transparent;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    gap: 15px;

    .logo {
      width: 200px;
      margin-bottom: 20px;
      margin-left: 3%;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.25rem;
      margin-left: 5%;
      margin-top: 2%;

      p {
        margin-bottom: 10px;
      }

      a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      a:hover {
        text-decoration: none;
      }
    }

    h2 {
      margin-bottom: 5%;
      margin-left: 5%;
    }
  }
`;

export default function BottomMain() {
  return (
    <div className="relative bg-gradient-to-b from-[#4f3271] to-[#4f3274] h-[100vh]">
      <Image
        src={bottomGrid}
        alt="Bottom Grid"
        className="w-full h-[100vh] md:h-[100vh] object-cover opacity-30"
      />
      <div className="absolute top-0 left-0 w-full flex items-center justify-start pl-10">
        <Wrapper>
          <div className="contact mt-[200px]">
            <div className="bord md:ml-[200%] md:w-[200%]">
              <div className="h-[20px]"></div>
              <Image src={logo} alt="Logo" className="logo" />
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <div className="contact-item">
                <a href="mailto:contact@example.com">
                  <BiLogoGmail />
                  <p>contact@example.com</p>
                </a>
              </div>
              <div className="contact-item">
                <a href="tel:1234567890">
                  <FiPhone />
                  <p>(123) 456-7890</p>
                </a>
              </div>
              <div className="contact-item">
                <SlLocationPin />
                <p>1234 Address St, City, Country</p>
              </div>
              <div className="md:h-[90px]"></div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
