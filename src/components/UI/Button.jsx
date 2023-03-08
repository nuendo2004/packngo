import React, { useState } from "react";

const Button = (props) => {
  const [bgColor, setBgColor] = useState(props.bgColor);

  return (
    <button
      className={`${props.className} block font-bold rounded-md px-8 py-1 ${
        props.border && "border"
      } cursor-pointer`}
      style={{
        textTransform: "uppercase",
        backgroundColor: bgColor,
        color: props.color,
      }}
      onMouseMove={() => setBgColor(props.hoverColor)}
      onMouseOut={() => setBgColor(props.bgColor)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
