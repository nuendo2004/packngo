import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${props.className} shadow-md rounded-lg`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
