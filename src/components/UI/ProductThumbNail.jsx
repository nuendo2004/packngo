import React from "react";

const ProductThumbNail = (props) => {
  const redirect = () => {
    console.log("to " + props.url);
  };

  const style = {
    pic: `${props.size === "mini" ? "h-20 w-20" : "h-44 w-44"} m-3`,
  };

  return (
    <div
      onClick={redirect}
      className={`${props.className} hover:cursor-pointer`}
    >
      <img className={style.pic} src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>$ {props.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductThumbNail;
