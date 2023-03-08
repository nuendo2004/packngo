import React from "react";
import Slider from "../Slider";

const ItemUpSell = (props) => {
  const list = props.item.relateProducts;
  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default ItemUpSell;
