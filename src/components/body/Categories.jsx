import React, { useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Category = [
  {
    name: "Casual",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/brevite-gOHBaIl5WRc-unsplash.jpg",
  },
  {
    name: "Commute",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/pexels-malte-luk-2432299.jpg",
  },
  {
    name: "School",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
  },
  {
    name: "Gear",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/pexels-athena-2962099.jpg",
  },
  {
    name: "Hiking",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/pexels-lalu-fatoni-732632.jpg",
  },
  {
    name: "Tactical",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/2-bro-s-media-h59Z9Kor1YY-unsplash.jpg",
  },
];

const renderCards = (cards) => {
  return cards.map((card) => {
    return (
      <div className="relative">
        <Card
          key={card.name}
          className="w-[320px] h-[580px] m-auto flex justify-center overflow-hidden bg-cover hover:opacity-60 "
          style={{ backgroundImage: `url(${card.image})` }}
        ></Card>
        <button className="absolute top-[50%] text-white font-extrabold">
          {card.name}
        </button>
      </div>
    );
  });
};

const Categories = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-12 max-w-6xl m-auto my-12 ">
      {renderCards(Category)}
    </div>
  );
};

export default Categories;
