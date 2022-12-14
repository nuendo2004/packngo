import React from "react";
import play from "../../static/icons/play.svg";

const LifeStyleBanner = () => {
  return (
    <div className="mt-16 overflow-hidden w-[100%] min-h-[420px] max-h-[600px] relative flex flex-col justify-center">
      <video
        className="absolute"
        src="https://dummy-backpack-store.s3.us-west-1.amazonaws.com/videos/video.mp4"
        autoPlay
        loop
      ></video>
      <div className="z-20 top-[70%] px-4">
        <img
          src={play}
          alt="play button"
          className=" w-10 m-auto shadow-md hover:cursor-pointer"
        />
        <h1
          className="text-white font-extrabold text-2xl tracking-wider my-4"
          style={{ textShadow: "#000000 0 0 4px " }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p
          className="text-white font-semibold text-md"
          style={{ textShadow: "#000000 0 0 4px" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum optio
          velit veniam architecto tempora quos recusandae voluptatibus nobis
          blanditiis. Non?
        </p>
      </div>
    </div>
  );
};

export default LifeStyleBanner;
