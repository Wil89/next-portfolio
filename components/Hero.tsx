import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
const { motion } = require("framer-motion");

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "HI, I'm Wilber Ulloa Jorge",
      "who transform coffee into code",
      "<LoveReactDevelopment />",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.5 }}
        transition={{ duration: 1 }}
        src="/images/profile3.png"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt="Wil's picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Frontend developer
        </h2>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
