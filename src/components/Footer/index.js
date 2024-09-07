import { Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch justify-center items-end py-[2.00rem] sm:py-[1.25rem] bg-[#0d0d0d]`}
    >
      <div className="container-xs mt-[3.00rem] flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col items-center">
          <div className="flex items-start justify-between gap-[1.25rem] self-stretch md:flex-col">
            <Img
              src="images/img_footer_logo.png"
              alt="Footer Logo"
              className="w-[8.38rem] h-[2.38rem]  object-contain"
            />
            <div className="flex w-[60%] items-start justify-between gap-[1.25rem] self-center md:w-full md:flex-col">
              <div className="flex w-[28%] flex-col items-start gap-[1.75rem] self-center md:w-full">
                <Heading as="h6" className="!text-[#ffffff]">
                  About Us
                </Heading>
                <ul className="flex flex-col items-start gap-[0.75rem]">
                  <li>
                    <a href="#">
                      <Heading as="h6">Master Plan</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Jobs" target="_blank" rel="noreferrer">
                      <Heading as="h6">Jobs</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Invest" target="_blank" rel="noreferrer">
                      <Heading as="h6">Invest</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Pressroom" target="_blank" rel="noreferrer">
                      <Heading as="h6">Pressroom</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Blog" target="_blank" rel="noreferrer">
                      <Heading as="h6">Blog</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Contact" target="_blank" rel="noreferrer">
                      <Heading as="h6">Contact</Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[42%] flex-col items-start gap-[1.75rem] md:w-full">
                <Heading as="h6" className="!text-[#ffffff]">
                  Explore EEVE
                </Heading>
                <ul className="flex flex-col items-start gap-[0.75rem]">
                  <li>
                    <a href="#">
                      <Heading as="h6">Unlock my Robot Power</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Starlight" target="_blank" rel="noreferrer">
                      <Heading as="h6">Starlight</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6">Robot Platform</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6">EEVE Roadmap</Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[1.75rem]">
                <Heading as="h6" className="!text-[#ffffff]">
                  Community & Support
                </Heading>
                <ul className="flex flex-col items-start gap-[0.75rem]">
                  <li>
                    <a href="#">
                      <Heading as="h6">Willow X Community</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6">Developer & Maker Access</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="h6">Special Cases</Heading>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-[#242948] gap-[1.25rem] mt-[6.75rem] flex items-end justify-between self-stretch border-t border-solid md:flex-col">
            <div className="flex gap-[0.63rem]">
              <Img
                src="images/img_fb.svg"
                alt="Facebook Icon"
                className="h-[1.25rem] w-[1.25rem]"
              />
              <Img
                src="images/img_info.svg"
                alt="Info Icon"
                className="h-[1.25rem] w-[1.25rem]"
              />
              <Img
                src="images/img_airplane.svg"
                alt="Airplane Icon"
                className="h-[1.25rem] w-[1.25rem]"
              />
              <Img
                src="images/img_link.svg"
                alt="Link Icon"
                className="h-[1.25rem] w-[1.25rem]"
              />
            </div>
            <div className="flex flex-wrap gap-[1.50rem]">
              <a href="#">
                <Heading as="h6">March22 Recap</Heading>
              </a>
              <a href="#">
                <Heading as="h6">Privacy Policy</Heading>
              </a>
              <a href="#">
                <Heading as="h6">General Terms</Heading>
              </a>
              <a href="Contact" target="_blank" rel="noreferrer">
                <Heading as="h6">Contact</Heading>
              </a>
            </div>
            <a href="#">
              <div className="mt-[2.38rem] flex gap-[0.50rem]">
                <Img
                  src="images/img_lightbulb.png"
                  alt="Lightbulb Icon"
                  className="h-[1.38rem] object-cover"
                />
                <Heading as="h6">United States (English)</Heading>
              </div>
            </a>
          </div>
          <Heading as="h6" className="mt-[2.75rem] !text-[#323444]">
            EEVE © 2024. All rights reserved.
          </Heading>
        </div>
      </div>
    </footer>
  );
}
