import React, { useState, useRef } from "react";
import styles from "./Slider.module.css";
import arrow from "../static/icons/arrow.png";

const Slider = (props) => {
  const [currentX, setX] = useState(0);
  const slider = useRef(0);
  const hideArrow = props.hideArrow ? styles.arrows : "";
  const center = props.center ? styles.center : "";
  const scrollSpeed = props.scrollSpeed ? props.scrollSpeed : 250;
  const arrowSize = props.arrowSize ? props.arrowSize : "w-10 h-20";

  const rightScrollStoper =
    currentX < 0 &&
    Math.abs(currentX) >= slider.current.clientWidth - props.maxWidth
      ? "hidden"
      : "";
  const leftScrollStoper = currentX === 0 ? "hidden" : "";

  return (
    <div
      className={`${props.className} ${styles.slider_frame} ${center} max-w-[${props.maxWidth}px]`}
    >
      <div
        className={`${hideArrow} ${leftScrollStoper} absolute ${arrowSize} top-[31%] rounded-sm flex items-center left-0 z-10 bg-white opacity-70 shadow-sm`}
        onClick={() => {
          if (currentX + scrollSpeed > 0) setX(0);
          else setX(currentX + scrollSpeed);
        }}
      >
        <img className="h-12 rotate-180 cursor-pointer" src={arrow} alt="" />
      </div>

      <div
        ref={slider}
        className={styles.carousel}
        style={{
          transform: `translateX(${currentX}px)`,
          transition: "all 0.3s ease-in",
        }}
      >
        {props.children}
      </div>

      <div
        className={`${hideArrow} ${rightScrollStoper} absolute ${arrowSize} top-[31%] rounded-sm flex items-center right-0 z-10 bg-white opacity-70 shadow-sm`}
        onClick={() => {
          setX(currentX - scrollSpeed);
        }}
      >
        <img className="h-12 cursor-pointer " src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Slider;
