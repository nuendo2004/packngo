import React from "react";
import banner from "../../static/images/banner_main.webp";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div>
      <div
        className="h-[720px] overflow-hidden bg-center bg-cover text-left"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="relative top-[300px] left-[4%]">
          <h2
            className="text-black font-bold text-1xl"
            style={{ textShadow: "0 0 2px #4F4F4F" }}
          >
            Shop for best quality backpacks
          </h2>

          <h1
            className="font-extrabold text-white text-5xl my-2"
            style={{ textShadow: "0 0 6px #4F4F4F" }}
          >
            Let's Go Places
          </h1>

          <Button color={"white"} bgColor={"purple"}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
