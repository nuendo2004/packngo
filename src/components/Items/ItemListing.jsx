import React, { useState } from "react";
import Slider from "../Slider";

const ItemListing = (props) => {
  const { item } = props;
  const [current, setCurrent] = useState(0);

  const renderContent = (array) => {
    return array.map((item) => {
      const highlight =
        array.indexOf(item) === current && "border-2 border-orange-400";
      const hover = array.indexOf(item) !== current && "hover:border";
      return (
        <img
          className={`${highlight} w-[100px] m-1 ${hover}`}
          key={item}
          src={item}
          alt=""
          onClick={() => {
            setCurrent(array.indexOf(item));
          }}
        />
      );
    });
  };

  return (
    <section className="">
      <figure className="w-[500px] m-auto max-sm:w-[100%]">
        <a href="">
          <img className="w-[500px]" src={item.images[current]} alt="" />
        </a>
        <Slider
          className="my-5"
          maxWidth={500}
          arrowSize="h-12 w-8"
          scrollSpeed={90}
        >
          {renderContent(item.images)}
        </Slider>
      </figure>
    </section>
  );
};

export default ItemListing;
