import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Transform coffee into code",
      "<LoveReactDevelopment />",
      "Widget inLoveOfFlutter(){}",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return <div>
    <h1>
        <span>{text}</span>
        <Cursor cursorColor="black"/>
    </h1>
  </div>;
};

export default Hero;
